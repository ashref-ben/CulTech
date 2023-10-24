package com.example.partenariat.Service;

import com.example.partenariat.Entities.Partenariats;
import com.example.partenariat.Repository.PartenariatRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
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
        Partenariats existingPartenariat = partenariatRepository.findById(p.getPartenariatID()).orElse(null);
        if (existingPartenariat != null) {
            existingPartenariat.setNom(p.getNom());
            existingPartenariat.setDescription(p.getDescription());
            existingPartenariat.setDateDebut(p.getDateDebut());
            existingPartenariat.setDateFin(p.getDateFin());
            existingPartenariat.setType(p.getType());

            // Save the updated entity
            return partenariatRepository.save(existingPartenariat);
        } else {
            throw new EntityNotFoundException("Partenariat with ID " + p.getPartenariatID() + " not found");
        }
    }


    @Override
    public Partenariats retrievePartenariats(Integer partenariatID) {
        return partenariatRepository.findById(partenariatID).get();
    }

    @Override
    public void removePartenariats(Integer partenariatID) {
        partenariatRepository.deleteById(partenariatID);   }

    @Override
    public List<Partenariats> advancedSearch(String nom, Date dateStart, Date dateEnd, String type) {
        List<Partenariats> results = partenariatRepository.findByAdvancedSearch(
                nom, dateStart, dateEnd, type);

        return results;
    }
}
