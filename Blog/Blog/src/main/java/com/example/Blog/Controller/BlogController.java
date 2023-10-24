package com.example.Blog.Controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/Blog")
public class BlogController {
    @GetMapping("/hey")
    public String getAnonymous() {
        String ok="Im Blog";
        System.out.println(ok);
        return ok;
    }
}
