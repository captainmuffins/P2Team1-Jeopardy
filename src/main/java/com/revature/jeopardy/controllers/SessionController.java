package com.revature.jeopardy.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.jeopardy.daos.GamesDAO;
import com.revature.jeopardy.daos.PlayersDAO;
import com.revature.jeopardy.daos.SessionDAO;
import com.revature.jeopardy.dtos.Response;
import com.revature.jeopardy.dtos.SessionDTO;
import com.revature.jeopardy.models.Games;
import com.revature.jeopardy.models.Players;
import com.revature.jeopardy.models.Session;


@RestController
@RequestMapping(value = "/session")
@Scope("session")
public class SessionController {
    
    @Autowired
    private SessionDAO sessionDAO;
    @Autowired
    private PlayersDAO playerDAO;
    @Autowired
    private GamesDAO gameDAO;

    @PostMapping
    public ResponseEntity<Session> addSession(@RequestBody SessionDTO sessionDTO){

        try {
            // Use DTO, find player, game by Id, set game and player
            // save session
            Session session = new Session();
            session.setSessionWinnings(sessionDTO.getSessionWinnings());
            session.setSessionWinner(sessionDTO.isSessionWinner());

            Optional<Players> playerOptional = playerDAO.findById(sessionDTO.getSessionPlayerfk());
            Players player = playerOptional.get();
            session.setSessionPlayerfk(player);

            Optional<Games> gameOptional = gameDAO.findById(sessionDTO.getSessionGamefk());
            Games game = gameOptional.get();
            session.setSessionGamefk(game);

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
            sessions = sessionDAO.findAllByOrderBySessionWinningsDesc();
            response = new Response(200, "Found All Sessions", true, sessions);

            return ResponseEntity.status(response.getStatusCode()).body(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
        response = new Response(400, "Could not find all sessions", false, sessions);
        return ResponseEntity.status(response.getStatusCode()).body(response);

        
    }

    @GetMapping("/byPlayer/{playerID}")
    public ResponseEntity<Response> findByPlayer(@PathVariable int playerID){

        Response response = null;
        List<Session> sessions = null;

        try {
            sessions = sessionDAO.findBySessionPlayerfkOrderBySessionWinningsDesc(playerID);
            if(!sessions.isEmpty()){
                response = new Response(200, "Found sessions with player ID " + playerID, true, sessions);

                return ResponseEntity.status(response.getStatusCode()).body(response);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        response = new Response(400, "Could not find sessions with player ID " + playerID, false, sessions);
        return ResponseEntity.status(response.getStatusCode()).body(response);

        
    }


    @DeleteMapping("/byId/{id}")
    public ResponseEntity deleteSession(@PathVariable int id){

        try{

            sessionDAO.deleteById(id);

            return ResponseEntity.accepted().build();

        } catch (Exception e){
            e.printStackTrace();
        }

        return ResponseEntity.badRequest().build();

    }

}
