package com.revature.jeopardy.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.jeopardy.daos.SessionDAO;
import com.revature.jeopardy.dtos.Response;
import com.revature.jeopardy.models.Session;


@Controller
@RequestMapping(value = "/session")
@Scope("session")
public class SessionController {
    
    @Autowired
    private SessionDAO sessionDAO;


    @GetMapping
    public ResponseEntity<Response> getAllSession(){

        Response response = null;
        List<Session> sessions = null;

        try {
            sessions = sessionDAO.findAllOrderBySessionWinningsDesc();
            response = new Response(200, "Found All Sessions", true, sessions);

            return ResponseEntity.status(response.getStatusCode()).body(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
        response = new Response(400, "Could not find all sessions", false, sessions);
        return ResponseEntity.status(response.getStatusCode()).body(response);

        
    }

}
