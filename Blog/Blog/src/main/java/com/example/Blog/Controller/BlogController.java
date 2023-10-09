package com.example.Blog.Controller;

import com.example.Blog.dtos.BlogRequest;
import com.example.Blog.dtos.BlogResponse;
import com.example.Blog.services.Blogservice;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/Blog")
@CrossOrigin("*")
public class BlogController {

    private final Blogservice blogservice;
    @GetMapping("/")
    @PreAuthorize("hasAnyRole('ADMIN','SUPER-ADMIN','USER','ORGANIZER','GUEST')")
    @ResponseStatus(HttpStatus.OK)
    public List<BlogResponse> getAll(){
        return blogservice.getAll();
    }
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasAnyRole('ADMIN','SUPER-ADMIN','USER','ORGANIZER')")
    public void create(@RequestBody BlogRequest blogRequest){
        blogservice.create(blogRequest);
    }
    @DeleteMapping("/delete/{blogId}")
    @PreAuthorize("hasAnyRole('ADMIN','SUPER-ADMIN','USER','ORGANIZER')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer blogId) {
        blogservice.delete(blogId);
    }
    @PutMapping("/update/{blogId}")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasAnyRole('ADMIN','SUPER-ADMIN','USER','ORGANIZER')")
    public void update(@PathVariable Integer blogId, @RequestBody BlogRequest blogRequest) {
        blogservice.update(blogId, blogRequest);
    }

    @GetMapping("/hey")
    public String getAnonymous() {
        String ok="Im Blog";
        System.out.println(ok);
        return ok;
    }
}
