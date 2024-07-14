package com.example.residents.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.residents.demo.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}

