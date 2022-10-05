package com.carbonO.User;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping(path ="api/v1/carbonO/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }


    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> getUsers(){
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/authorizeUser")
    public ResponseEntity<String> isAuthorize(){
        return ResponseEntity.ok().body("Authorized");
    }

    @GetMapping("/getUserId")
    public ResponseEntity<Long> getUserId(@RequestParam String email){
        return ResponseEntity.ok().body(userService.loadUserByUsername(email).getId());
    }

}
