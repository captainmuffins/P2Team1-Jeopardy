package com.revature.jeopardy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.revature.jeopardy.daos.PlayersDAO;
import com.revature.jeopardy.models.Players;
import com.revature.jeopardy.models.Responses;

@Controller
@RequestMapping(value = "/players")
@CrossOrigin
@ResponseBody
public class PlayersController {

	@Autowired
	private PlayersDAO playersDAO;

	public PlayersController(PlayersDAO playersDAO) {
		super();
		this.playersDAO = playersDAO;
	}

	@RequestMapping(value = "/new", method = RequestMethod.POST, consumes = "application/json")
	public ResponseEntity<Responses> createNewPlayer(@RequestBody String postPayload) {
		Gson gson = new Gson();

		Responses response = null;

		Players requestBody = gson.fromJson(postPayload, Players.class);
		Players createdPlayer = playersDAO.createNewPlayer(requestBody);
		
		if(createdPlayer != null) {
			response = new Responses(200, "Registered new player", true, createdPlayer);
			return ResponseEntity.status(200).body(response);
		} else {
			response = new Responses(400, "Registration failed", false, null);
			return ResponseEntity.status(400).body(response);
		}
	}

}
