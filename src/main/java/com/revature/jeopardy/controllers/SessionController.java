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
import org.springframework.web.bind.annotation.PutMapping;
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
    public ResponseEntity<Response> addSession(@RequestBody SessionDTO sessionDTO){
        Response response;
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
                response = new Response(400, "New Session is null", false, null);
                return ResponseEntity.badRequest().body(response);
            }
            response = new Response(202, "Session added Successfully", true, newSession);
            return ResponseEntity.accepted().body(response);

        } catch (Exception e){
            e.printStackTrace();
        }

        response = new Response(400, "Error adding session", false, null);
        return ResponseEntity.badRequest().body(response);

    }

    @PutMapping("/id/{id}")
    public ResponseEntity<Response> updateSession(@RequestBody SessionDTO session, @PathVariable int id){
        // Find session by id first, then update it and save it to database
        Response response;

        try{
            Optional<Session> sessionOptional = sessionDAO.findById(id);
            Session oldSession = sessionOptional.get();
            oldSession.setSessionWinner(session.isSessionWinner());
            oldSession.setSessionWinnings(session.getSessionWinnings());

            Session newSession = sessionDAO.save(oldSession);

            response = new Response(202, "Session updated Successfully", true, newSession);
            return ResponseEntity.accepted().body(response);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        

        response = new Response(400, "Error updating session", false, null);
        return ResponseEntity.badRequest().body(response);
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
    public ResponseEntity<Response> deleteSession(@PathVariable int id){

        Response response;
        try{

            sessionDAO.deleteById(id);

            response = new Response(202, "Session deleted successfully", true, null);
            return ResponseEntity.accepted().body(response);

        } catch (Exception e){
            e.printStackTrace();
        }

        response = new Response(400, "Error deleting session", false, null);
        return ResponseEntity.badRequest().body(response);

    }

}
