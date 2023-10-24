package com.example.Event.Service;

import com.example.Event.Entity.Events;
import com.example.Event.Repository.EventsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventsService implements IEventsService{
    private final EventsRepository eventsRepository;

    public EventsService(EventsRepository eventsRepository) {
        this.eventsRepository = eventsRepository;
    }

        @Override
        public List<Events> getAll() {
            return eventsRepository.findAll();
        }

        @Override
        public boolean add(Events events) {
            eventsRepository.save(events);
            return true;
        }

        @Override
        public boolean delete(Long id) {
            eventsRepository.deleteById(id);
            return true;
        }

        @Override
        public Boolean update(Events events) {
            if(events == null || events.getId() == null){
                return false;
            }
            Events events1 = eventsRepository.findById(events.getId()).get();
            if(events1 == null){
                return false;
            }
            eventsRepository.save(events);
            return true;
        }
        public Long getId(Events events){
            return events.getId();
        }
        public Events getEvent(Long id){
            return eventsRepository.findById(id).get();
        }
}
