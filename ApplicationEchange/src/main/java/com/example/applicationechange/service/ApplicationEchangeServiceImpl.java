package com.example.applicationechange.service;

import com.example.applicationechange.entity.ApplicationEchange;
import com.example.applicationechange.repository.ApplicationEchangeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationEchangeServiceImpl implements ApplicationEchangeService {
    @Autowired
    ApplicationEchangeRepository applicationEchangeRepository;
    @Override
    public List<ApplicationEchange> findAll() {
        return applicationEchangeRepository.findAll();
    }

    @Override
    public ApplicationEchange findById(Long id) {
        return applicationEchangeRepository.findById(id).orElse(null);
    }

    @Override
    public ApplicationEchange save(ApplicationEchange applicationEchange) {
        return applicationEchangeRepository.save(applicationEchange);
    }

    @Override
    public void deleteById(Long id) {
        applicationEchangeRepository.deleteById(id);
    }
}
