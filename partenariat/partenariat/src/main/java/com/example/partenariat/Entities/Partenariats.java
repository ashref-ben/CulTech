package com.example.partenariat.Entities;

import lombok.*;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Partenariats")
public class Partenariats implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "partenariatID", nullable = false)
    private Integer partenariatID;
    private String nom;
    private String description;
    private Date dateDebut;
    private Date dateFin;
    private String type;
}
