package com.revature.jeopardy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    public ResponseEntity addGame(@RequestBody Games games){

        try{

            Games newGame = gamesDAO.save(games);

            if(newGame != null){
                return ResponseEntity.accepted().build();
            }

        } catch(Exception e){
            e.printStackTrace();
        }

        return ResponseEntity.badRequest().build();

    }

    @DeleteMapping("byId/{id}")
    public ResponseEntity deleteGame(@PathVariable int id){

        try{

            gamesDAO.deleteById(id);

            return ResponseEntity.accepted().build();

        } catch (Exception e){
            e.printStackTrace();
        }

        return ResponseEntity.badRequest().build();

    }
    
}
