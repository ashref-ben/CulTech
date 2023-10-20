package com.example.partenariat.Service;

import com.example.partenariat.Entities.Partenariats;
import com.example.partenariat.Repository.PartenariatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicePartenariatImp implements ServicePartenariat{
    @Autowired
    PartenariatRepository partenariatRepository;
    @Override
    public List<Partenariats> retrieveAllPartenariat() {
        return partenariatRepository.findAll();
    }

    @Override
    public Partenariats addPartenariats(Partenariats p) {
        return partenariatRepository.save(p);

    }

    @Override
    public Partenariats updatePartenariats(Partenariats p) {
        return partenariatRepository.save(p);
    }

    @Override
    public Partenariats retrievePartenariats(Integer partenariatID) {
        return partenariatRepository.findById(partenariatID).get();
    }

    @Override
    public void removePartenariats(Integer partenariatID) {
        partenariatRepository.deleteById(partenariatID);   }
}
