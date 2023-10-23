package com.example.applicationechange.service;

import com.example.applicationechange.entity.ApplicationEchange;

import java.util.List;

public interface ApplicationEchangeService {
    List<ApplicationEchange> findAll();
    ApplicationEchange findById(Long id);
    ApplicationEchange save(ApplicationEchange applicationEchange);
    void deleteById(Long id);
}
