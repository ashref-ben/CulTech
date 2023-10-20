package com.example.Participation.Service;

import com.example.Participation.Entity.Participation;
import com.example.Participation.Repository.ParticipationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParticipationService implements IParticipationService {
    private final ParticipationRepository participationRepository;

    public ParticipationService(ParticipationRepository participationRepository) {
        this.participationRepository = participationRepository;
    }

    @Override
    public List<Participation> getAll() {
        return participationRepository.findAll();
    }

    @Override
    public boolean add(Participation participation){
        participationRepository.save(participation);
        return true;
    }
    @Override
    public boolean delete(Long id){
        participationRepository.deleteById(id);
        return true;
    }
    @Override
    public Boolean update(Participation participation){
        if(participation == null || participation.getId() == null){
            return false;
        }
        Participation participation1 = participationRepository.findById(participation.getId()).get();
        if(participation1 == null){
            return false;
        }
        participationRepository.save(participation);
        return true;
    }
    public Long getId(Participation participation){
        return participation.getId();
    }
    @Override
    public Participation getParticipation(Long id){
        return participationRepository.findById(id).get();
    }
}
