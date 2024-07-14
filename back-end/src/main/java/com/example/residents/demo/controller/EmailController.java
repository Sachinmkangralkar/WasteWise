package com.example.residents.demo.controller;

import com.example.residents.demo.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class EmailController {

    private static final Logger LOGGER = Logger.getLogger(EmailController.class.getName());

    @Autowired
    private EmailService emailService;

    @PostMapping("/sendWarningEmail")
    public ResponseEntity<String> sendWarningEmail(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String subject = "Waste Segregation Warning";
        String text = "This is a warning email. Please segregate your waste.";

        try {
            LOGGER.info("Received request to send warning email to " + email);
            emailService.sendSimpleMessage(email, subject, text);
            return ResponseEntity.ok("Warning email sent successfully");
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Failed to send warning email to " + email, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send warning email");
        }
    }

    @PostMapping("/sendFineEmail")
    public ResponseEntity<String> sendFineEmail(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String subject = "Waste Segregation Fine";
        String text = "You have been fined for not segregating your waste.";

        try {
            LOGGER.info("Received request to send fine email to " + email);
            emailService.sendSimpleMessage(email, subject, text);
            return ResponseEntity.ok("Fine email sent successfully");
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Failed to send fine email to " + email, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send fine email");
        }
    }
}
