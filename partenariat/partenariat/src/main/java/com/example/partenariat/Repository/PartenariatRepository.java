package com.example.partenariat.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.partenariat.Entities.Partenariats;
import org.springframework.stereotype.Repository;

@Repository
public interface PartenariatRepository extends JpaRepository<Partenariats, Integer> {
   // Partenariats findBypatnername(String nom);
}
