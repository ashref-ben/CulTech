package com.example.applicationechange.controller;

import com.example.applicationechange.entity.ApplicationEchange;
import com.example.applicationechange.service.ApplicationEchangeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/Application")
@CrossOrigin("*")
public class ApplicationEchangeController {
    @Autowired
    private ApplicationEchangeService applicationEchangeService;

    @GetMapping("/all")
    public List<ApplicationEchange> findAll() {
        return applicationEchangeService.findAll();
    }

    @GetMapping("/{id}")
    public ApplicationEchange findById(@PathVariable Long id) {
        return applicationEchangeService.findById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addApplicationEchange(
            @RequestParam("nomEtudiant") String nomEtudiant,
            @RequestParam("emailEtudiant") String emailEtudiant,
            @RequestParam("lettreDeMotivation") String lettreDeMotivation,
            @RequestParam("idProgrammeEchange") Long idProgrammeEchange,
            @RequestParam("cv") MultipartFile cv) {

        ApplicationEchange applicationEchange = new ApplicationEchange();
        applicationEchange.setEmailEtudiant(emailEtudiant);
        applicationEchange.setIdProgrammeEchange(idProgrammeEchange);
        applicationEchange.setNomEtudiant(nomEtudiant);
        applicationEchange.setLettreDeMotivation(lettreDeMotivation);


        try {
            applicationEchange.setCv(cv.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        applicationEchangeService.save(applicationEchange);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateApplicationEchange(
            @RequestParam("id") Long id,
            @RequestParam("nomEtudiant") String nomEtudiant,
            @RequestParam("emailEtudiant") String emailEtudiant,
            @RequestParam("lettreDeMotivation") String lettreDeMotivation,
            @RequestParam("idProgrammeEchange") Long idProgrammeEchange,
            @RequestParam("cv") MultipartFile cv) {

        ApplicationEchange applicationEchange = new ApplicationEchange();
        applicationEchange.setId(id);
        applicationEchange.setEmailEtudiant(emailEtudiant);
        applicationEchange.setIdProgrammeEchange(idProgrammeEchange);
        applicationEchange.setNomEtudiant(nomEtudiant);
        applicationEchange.setLettreDeMotivation(lettreDeMotivation);

        try {
            applicationEchange.setCv(cv.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        applicationEchangeService.save(applicationEchange);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id) {
        applicationEchangeService.deleteById(id);
    }
}
