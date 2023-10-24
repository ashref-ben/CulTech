package com.example.partenariat.Service;

import com.example.partenariat.Entities.Partenariats;

import java.util.Date;
import java.util.List;

public interface ServicePartenariat{
    List<Partenariats> retrieveAllPartenariat();
    Partenariats addPartenariats (Partenariats p);

    Partenariats updatePartenariats (Partenariats p);

    Partenariats retrievePartenariats(Integer partenariatID);

    void removePartenariats(Integer partenariatID);

    List<Partenariats> advancedSearch(String nom, Date dateStart, Date dateEnd, String type);

}
