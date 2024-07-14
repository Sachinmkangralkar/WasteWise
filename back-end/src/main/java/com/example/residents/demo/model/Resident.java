package com.example.residents.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Resident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String houseNumber;
    private String address;
    private String phoneNumber;
    private String email;
    private int segregatedCount;
    private int notSegregatedCount;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getSegregatedCount() {
        return segregatedCount;
    }

    public void setSegregatedCount(int segregatedCount) {
        this.segregatedCount = segregatedCount;
    }

    public int getNotSegregatedCount() {
        return notSegregatedCount;
    }

    public void setNotSegregatedCount(int notSegregatedCount) {
        this.notSegregatedCount = notSegregatedCount;
    }
}
