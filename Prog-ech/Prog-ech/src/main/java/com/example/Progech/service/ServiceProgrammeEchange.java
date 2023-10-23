package com.example.Progech.service;

import com.example.Progech.entity.ProgrammeEchange;

import java.util.List;

public interface ServiceProgrammeEchange {
    List<ProgrammeEchange> findAll();
    ProgrammeEchange findById(Long id);
    ProgrammeEchange save(ProgrammeEchange programmeEchange);
    void deleteById(Long id);
}
