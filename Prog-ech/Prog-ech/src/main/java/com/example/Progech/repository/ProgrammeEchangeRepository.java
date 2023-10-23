package com.example.Progech.repository;

import com.example.Progech.entity.ProgrammeEchange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProgrammeEchangeRepository extends JpaRepository<ProgrammeEchange,Long> {
}
