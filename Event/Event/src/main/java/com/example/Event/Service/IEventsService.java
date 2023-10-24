package com.example.Event.Service;

import com.example.Event.Entity.Events;

import java.util.List;

public interface IEventsService {
List<Events> getAll();
boolean add(Events events);
boolean delete(Long id);
Boolean update(Events events);
}
