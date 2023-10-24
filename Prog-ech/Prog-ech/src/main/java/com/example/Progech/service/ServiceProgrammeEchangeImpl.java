package com.example.Progech.service;

import com.example.Progech.entity.ProgrammeEchange;
import com.example.Progech.repository.ProgrammeEchangeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceProgrammeEchangeImpl implements ServiceProgrammeEchange{
    @Autowired
    private ProgrammeEchangeRepository programmeEchangeRepository;

    @Override
    public List<ProgrammeEchange> findAll() {
        return programmeEchangeRepository.findAll();
    }

    @Override
    public ProgrammeEchange findById(Long id) {
        return programmeEchangeRepository.findById(id).orElse(null);
    }

    @Override
    public ProgrammeEchange save(ProgrammeEchange programmeEchange) {
        return programmeEchangeRepository.save(programmeEchange);
    }

    @Override
    public void deleteById(Long id) {
        programmeEchangeRepository.deleteById(id);
    }
}
