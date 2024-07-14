package com.example.residents.demo.controller;

import com.example.residents.demo.model.Resident;
import com.example.residents.demo.service.ResidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/residents")
public class ResidentController {

    @Autowired
    private ResidentService residentService;

    @GetMapping
    public List<Resident> getAllResidents() {
        return residentService.getAllResidents();
    }

    @PostMapping
    public Resident addResident(@RequestBody Resident resident) {
        return residentService.addResident(resident);
    }

    @DeleteMapping("/{id}")
    public void deleteResident(@PathVariable Long id) {
        residentService.deleteResident(id);
    }

    @PostMapping("/segregate/{id}")
    public void segregateResident(@PathVariable Long id) {
        residentService.segregateResident(id);
    }

    @PostMapping("/not-segregate/{id}")
    public void notSegregateResident(@PathVariable Long id) {
        residentService.notSegregateResident(id);
    }
}
