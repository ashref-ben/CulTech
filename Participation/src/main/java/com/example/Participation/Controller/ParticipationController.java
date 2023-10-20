package com.example.Participation.Controller;

import com.example.Participation.Entity.Participation;
import com.example.Participation.Service.ParticipationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/Participation")
@CrossOrigin("*")
public class ParticipationController {
    private final ParticipationService participationService;

    @GetMapping("/all")
    public ResponseEntity<List<Participation>> getAll() {
        return new ResponseEntity<>(participationService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Boolean> add(@RequestBody Participation participation) {
        return new ResponseEntity<>(participationService.add(participation), HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<>(participationService.delete(id), HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Boolean> update(@RequestBody Participation participation) {
        return new ResponseEntity<>(participationService.update(participation), HttpStatus.ACCEPTED);
    }
    @GetMapping("/getId")
    public ResponseEntity<Long> getId(@RequestBody Participation participation){
        return new ResponseEntity<>(participationService.getId(participation), HttpStatus.FOUND);
    }
    @GetMapping("/getParticipation/{id}")
    public ResponseEntity<Participation> getParticipation(@PathVariable("id") Long id){
        return new ResponseEntity<>(participationService.getParticipation(id), HttpStatus.FOUND);
    }


}
