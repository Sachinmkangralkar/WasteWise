package com.example.residents.demo.controller;
// com/example/residents/demo/controller/UserController.java

import com.example.residents.demo.model.User;
import com.example.residents.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return userService.authenticate(user.getEmail(), user.getPassword())
                .map(authenticatedUser -> ResponseEntity.ok().build())
                .orElseGet(() -> ResponseEntity.status(401).body("Invalid email or password"));
    }
}

