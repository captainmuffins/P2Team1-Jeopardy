package com.revature.jeopardy.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.jeopardy.daos.SessionDAO;
import com.revature.jeopardy.dtos.Response;
import com.revature.jeopardy.models.Session;


@RestController
@RequestMapping(value = "/session")
@Scope("session")
public class SessionController {
    
    @Autowired
    private SessionDAO sessionDAO;



    @PostMapping
    public ResponseEntity<Session> addSession(@RequestBody Session session){

        try {

            Session newSession = sessionDAO.save(session);

            if(newSession == null){
                return ResponseEntity.badRequest().build();
            }
            
            return ResponseEntity.accepted().build();

        } catch (Exception e){
            e.printStackTrace();
        }

        return ResponseEntity.badRequest().build();

    }





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

    @GetMapping("/byPlayer/{id}")
    public ResponseEntity<Response> findByPlayer(@PathVariable int playerID){

        Response response = null;
        List<Session> sessions = null;

        try {
            sessions = sessionDAO.findByIdOrderBySessionWinningsDesc(playerID);
            response = new Response(200, "Found sessions with player ID " + playerID, true, sessions);

            return ResponseEntity.status(response.getStatusCode()).body(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
        response = new Response(400, "Could not find sessions with player ID " + playerID, false, sessions);
        return ResponseEntity.status(response.getStatusCode()).body(response);

        
    }

}
