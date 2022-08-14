package com.revature.jeopardy.controllers;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.jeopardy.daos.GamesDAO;
import com.revature.jeopardy.dtos.Response;
import com.revature.jeopardy.models.Games;

@RestController
@RequestMapping(value = "/games")
@Scope("session")
public class GamesController {

    @Autowired
    private GamesDAO gamesDAO;

    @PostMapping
    public ResponseEntity<Response> addGame(){

        Response response;

        try{

            Games newGame = new Games();
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            newGame.setGameCreated(timestamp);

            newGame = gamesDAO.save(newGame);
            if(newGame != null){
                response = new Response(202, "Game added successfully", true, newGame);
                return ResponseEntity.accepted().body(response);
            }

        } catch(Exception e){
            e.printStackTrace();
        }

        response = new Response(400, "Error adding game", false, null);
        return ResponseEntity.badRequest().body(response);

    }

    @DeleteMapping("byId/{id}")
    public ResponseEntity<Response> deleteGame(@PathVariable int id){
        Response response;
        try{

            gamesDAO.deleteById(id);
            response = new Response(202, "Game deleted successfully", true, null);

            return ResponseEntity.accepted().body(response);

        } catch (Exception e){
            e.printStackTrace();
        }

        response = new Response(400, "Error deleting game", false, null);
        return ResponseEntity.badRequest().body(response);

    }
    
}
