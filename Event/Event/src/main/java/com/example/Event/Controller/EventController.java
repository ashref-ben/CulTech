package com.example.Event.Controller;

import com.example.Event.Entity.Events;
import com.example.Event.Service.EventsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController
@RequestMapping("/Event")
@CrossOrigin("*")
public class EventController {
    private final EventsService eventsService;
    @GetMapping("/all")
    public ResponseEntity<List<Events>> getAll() {
     return new ResponseEntity<>(eventsService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Boolean> add(@RequestBody Events events) {
        return new ResponseEntity<>(eventsService.add(events), HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<>(eventsService.delete(id), HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Boolean> update(@RequestBody Events events) {
        return new ResponseEntity<>(eventsService.update(events), HttpStatus.ACCEPTED);
    }
    @GetMapping("/getId")
    public ResponseEntity<Long> getId(@RequestBody Events events){
        return new ResponseEntity<>(eventsService.getId(events), HttpStatus.FOUND);
    }
    @GetMapping("/getEvent/{id}")
    public ResponseEntity<Events> getEvent(@PathVariable("id") Long id){
        return new ResponseEntity<>(eventsService.getEvent(id), HttpStatus.FOUND);
    }

}
