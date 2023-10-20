package com.example.partenariat.Controller;

import com.example.partenariat.Entities.Partenariats;
import com.example.partenariat.Service.ServicePartenariatImp;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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
    @PutMapping("/update/{partenariatID}")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasAnyRole('ADMIN','SUPER-ADMIN','USER','ORGANIZER')")
    public void update( @RequestBody Partenariats partenariats) {
        iService.updatePartenariats(partenariats);
    }
}
