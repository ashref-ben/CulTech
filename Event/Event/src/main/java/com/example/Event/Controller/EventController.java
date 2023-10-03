package com.example.Event.Controller;

import com.example.Event.Entity.Events;
import com.example.Event.Service.EventsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController
@RequestMapping("/Event")
public class EventController {
    private final EventsService eventsService;
    @GetMapping("/hey")
    public String getAnonymous() {
        String ok="Im Event";
        System.out.println(ok);
        return ok;
    }
    @GetMapping("/all")
    public List<Events> getAll() {
     return eventsService.getAll();
    }

    @PostMapping("/add")
    public boolean add(@RequestBody Events events) {
        return eventsService.add(events);
    }
    @DeleteMapping("/delete/{id}")
    public boolean delete(@PathVariable Long id) {
        return eventsService.delete(id);
    }
    @PutMapping("/update")
    public Boolean update(@RequestBody Events events) {
        return eventsService.update(events);
    }
    @GetMapping("/getId")
    public Long getId(@RequestBody Events events){
        return eventsService.getId(events);
    }
    @GetMapping("/getEvent/{id}")
    public Events getEvent(@PathVariable("id") Long id){
        return eventsService.getEvent(id);
    }

}
