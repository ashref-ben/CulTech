package com.example.Progech.controller;

import com.example.Progech.entity.ProgrammeEchange;
import com.example.Progech.service.ServiceProgrammeEchange;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/Progech")
@CrossOrigin("*")
public class ProgechController {

    @Autowired
    private ServiceProgrammeEchange programmeEchangeService;
    @GetMapping("/hey")
    public String getAnonymous() {
        String ok="Im prog-ech";
        System.out.println(ok);
        return ok;
    }
    @GetMapping("/getall")
    public List<ProgrammeEchange> findAll() {
        return programmeEchangeService.findAll();
    }

    @GetMapping("/get/{id}")
    public ProgrammeEchange findById(@PathVariable Long id) {
        return programmeEchangeService.findById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addProgrammeEchange(
            @RequestParam("title") String title,
            @RequestParam("region") String region,
            @RequestParam("description") String description,
            @RequestParam("startDate") LocalDate startDate,
            @RequestParam("endDate") LocalDate endDate,
            @RequestParam("image") MultipartFile image) {

        ProgrammeEchange programmeEchange = new ProgrammeEchange();
        programmeEchange.setTitle(title);
        programmeEchange.setRegion(region);
        programmeEchange.setDescription(description);
        programmeEchange.setStartDate(startDate);
        programmeEchange.setEndDate(endDate);
        try {
            programmeEchange.setPicture(image.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        programmeEchangeService.save(programmeEchange);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id) {
        programmeEchangeService.deleteById(id);
    }
    @PutMapping("/update")
    public ResponseEntity<?> updateProgrammeEchange(
            @RequestParam("id") Long id,
            @RequestParam("title") String title,
            @RequestParam("region") String region,
            @RequestParam("description") String description,
            @RequestParam("startDate") LocalDate startDate,
            @RequestParam("endDate") LocalDate endDate,
            @RequestParam("image") MultipartFile image) {

        ProgrammeEchange programmeEchange = new ProgrammeEchange();
        programmeEchange.setId(id);
        programmeEchange.setTitle(title);
        programmeEchange.setRegion(region);
        programmeEchange.setDescription(description);
        programmeEchange.setStartDate(startDate);
        programmeEchange.setEndDate(endDate);
        try {
            programmeEchange.setPicture(image.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        programmeEchangeService.save(programmeEchange);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
