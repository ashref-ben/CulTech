package com.example.partenariat.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.partenariat.Entities.Partenariats;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface PartenariatRepository extends JpaRepository<Partenariats, Integer> {
   // Partenariats findBypatnername(String nom);
//   @Query("SELECT p FROM Partenariats p " +
//           "WHERE (:nom IS NULL OR p.nom LIKE %:nom%) " +
//           "AND (:dateStart IS NULL OR p.dateDebut >= :dateStart) " +
//           "AND (:dateEnd IS NULL OR p.dateDebut <= :dateEnd) " +
//           "AND (:type IS NULL OR p.type LIKE %:type%)")
//   List<Partenariats> findByAdvancedSearch(
//           @Param("keyword") String keyword,
//           @Param("dateStart") Date dateStart,
//           @Param("dateEnd") Date dateEnd,
//           @Param("type") String type
//   );
}
