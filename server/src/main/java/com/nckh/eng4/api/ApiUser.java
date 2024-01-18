package com.nckh.eng4.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class ApiUser {
    @GetMapping("users")
    public String hello() {
        return "Hello world";
    }
}
