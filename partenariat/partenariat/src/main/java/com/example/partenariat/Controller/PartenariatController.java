package com.example.partenariat.Controller;

import com.example.partenariat.Entities.Partenariats;
import com.example.partenariat.Service.ServicePartenariatImp;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/Partenariat")
@CrossOrigin("*")
public class PartenariatController {
    //@Autowired
    ServicePartenariatImp iService;
    @GetMapping("/retrieveAllPartenariat")
    @PreAuthorize("hasAnyRole('ADMIN','SUPER-ADMIN','USER','ORGANIZER','GUEST')")
    @ResponseStatus(HttpStatus.OK)
    public List<Partenariats> getUsers() {
        List<Partenariats> listPartenariat = iService.retrieveAllPartenariat();
        return listPartenariat;
    }


    @PostMapping("/add")
    @PreAuthorize("hasAnyRole('ADMIN','SUPER-ADMIN','USER','ORGANIZER')")
    public Partenariats create(@RequestBody Partenariats partenariats){
        return iService.addPartenariats(partenariats);
    }
    @DeleteMapping("/delete/{partenariatID}")
    @PreAuthorize("hasAnyRole('ADMIN','SUPER-ADMIN','USER','ORGANIZER')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer partenariatID) {
        iService.removePartenariats(partenariatID);
    }
    @PutMapping("/update/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','SUPER-ADMIN','USER','ORGANIZER')")
    public ResponseEntity<Partenariats> update(@PathVariable("id") Integer id,@RequestBody Partenariats p) {
        p.setPartenariatID(id);
        Partenariats updatedEntity =iService.updatePartenariats(p);
        return ResponseEntity.ok(updatedEntity);
    }




//        @GetMapping("/advanced-search")
//        @PreAuthorize("hasAnyRole('ADMIN','SUPER-ADMIN','USER','ORGANIZER')")
//        public ResponseEntity<List<Partenariats>> advancedSearch(
//                @RequestParam(name = "nom", required = false) String nom,
//                @RequestParam(name = "dateStart", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateStart,
//                @RequestParam(name = "dateEnd", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateEnd,
//                @RequestParam(name = "type", required = false) String type) {
//
//            List<Partenariats> results = iService.advancedSearch(nom, dateStart, dateEnd, type);
//            return new ResponseEntity<>(results, HttpStatus.OK);
//        }

}
