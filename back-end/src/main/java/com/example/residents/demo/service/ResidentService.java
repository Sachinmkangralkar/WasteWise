package com.example.residents.demo.service;

import com.example.residents.demo.model.Resident;
import com.example.residents.demo.repository.ResidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidentService {

    @Autowired
    private ResidentRepository residentRepository;

    @Autowired
    private EmailService emailService;

    public List<Resident> getAllResidents() {
        return residentRepository.findAll();
    }

    public Resident addResident(Resident resident) {
        return residentRepository.save(resident);
    }

    public void deleteResident(Long id) {
        residentRepository.deleteById(id);
    }

    public void segregateResident(Long id) {
        Resident resident = residentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resident not found"));
        resident.setSegregatedCount(resident.getSegregatedCount() + 1);
        residentRepository.save(resident);
    }

    public void notSegregateResident(Long id) {
        Resident resident = residentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resident not found"));
        resident.setNotSegregatedCount(resident.getNotSegregatedCount() + 1);
        residentRepository.save(resident);

        String email = resident.getEmail();
        String subject;
        String text;

        if (resident.getNotSegregatedCount() == 1) {
            subject = "Waste Segregation Warning.अपशिष्ट पृथक्करण चेतावनी.ತ್ಯಾಜ್ಯ ವಿಂಗಡಣೆ ಎಚ್ಚರಿಕೆ";
            text = "This is a warning email. Please segregate your waste.\n"+"यह एक चेतावनी ईमेल है. कृपया अपना कचरा अलग करें।  \n" +
                    "ಇದು ಎಚ್ಚರಿಕೆಯ ಇಮೇಲ್ ಆಗಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಕಸವನ್ನು ಬೇರ್ಪಡಿಸಿ.";
        } else {
            subject = "Waste Segregation Fine. ತ್ಯಾಜ್ಯ ವಿಂಗಡಣೆ ದಂಡ. अपशिष्ट पृथक्करण ठीक";
            text = "You have been fined for not segregating your waste.\n"+"ನಿಮ್ಮ ತ್ಯಾಜ್ಯವನ್ನು ಬೇರ್ಪಡಿಸದಿದ್ದಕ್ಕಾಗಿ ನಿಮಗೆ ದಂಡ ವಿಧಿಸಲಾಗಿದೆ.\n"+"कूड़ा अलग न करने के कारण आप पर जुर्माना लगाया गया है।";
        }

        emailService.sendSimpleMessage(email, subject, text);
    }
}
