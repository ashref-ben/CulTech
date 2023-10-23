package com.example.applicationechange.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class ApplicationEchange {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomEtudiant;
    private String emailEtudiant;
    private Long idProgrammeEchange;
    @Lob
    private byte[] cv;
    private String lettreDeMotivation;
}
