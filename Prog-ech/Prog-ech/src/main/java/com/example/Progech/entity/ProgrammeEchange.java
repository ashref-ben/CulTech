package com.example.Progech.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;


@Data
@Entity
public class ProgrammeEchange {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String region;
    private String description;
    @Lob
    private byte[] picture;
    private LocalDate startDate;
    private LocalDate endDate;
}

