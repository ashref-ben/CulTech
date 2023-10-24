package com.example.Participation.Service;


import com.example.Participation.Entity.Participation;

import java.util.List;

public interface IParticipationService {
    List<Participation> getAll();
    boolean add(Participation participation);
    boolean delete(Long id);
    Boolean update(Participation participation);
    Long getId(Participation participation);
    Participation getParticipation(Long id);
}
