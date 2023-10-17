package com.example.AppUser.Controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@Slf4j
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @GetMapping("/hey")
    public String getAnonymous() {
        String ok="Im User";
        System.out.println(ok);
        return ok;
    }
}
