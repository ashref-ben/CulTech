package com.example.participation.Controller;

import com.example.participation.Entity.Participation;
import com.example.participation.Service.ParticipationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/participation")
public class ParticipationController {
    private final ParticipationService participationService;

    @GetMapping("/all")
    public List<Participation> getAll() {
        return participationService.getAll();
    }
    @PostMapping("/add")
    public boolean add(@RequestBody Participation participation) {
        return participationService.add(participation);
    }
    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable Long id) {
        return participationService.delete(id);
    }
    @PutMapping("/update")
    public Boolean update(@RequestBody Participation participation) {
        return participationService.update(participation);
    }
    @GetMapping("/getId")
    public Long getId(@RequestBody Participation participation){
        return participationService.getId(participation);
    }
    @GetMapping("/getParticipation/{id}")
    public Participation getParticipation(@PathVariable("id") Long id){
        return participationService.getParticipation(id);
    }

}
