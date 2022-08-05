package com.revature.jeopardy.controllers;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.revature.jeopardy.daos.PlayersDAO;
import com.revature.jeopardy.dtos.Response;
import com.revature.jeopardy.models.Players;
import com.revature.jeopardy.utils.AuthUtil;

@Controller
@RequestMapping(value="/players")
@Scope("session")
public class PlayersController {
	
	@Autowired
	private PlayersDAO playersDAO;
	
	@RequestMapping(value = "/new", method = RequestMethod.POST, consumes = "application/json")
	public ResponseEntity<Response> createNewPlayer(@RequestBody Players newPlayer) {
		
		Players createPlayer = null;
		
		try {
			// Encrypt password in database
			String encryptPassword = AuthUtil.doEncrypt(newPlayer.getPlayerPassword());
			newPlayer.setPlayerPassword(encryptPassword);
			createPlayer = playersDAO.save(newPlayer);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		
		Response response = null;
		if(createPlayer != null) {
			response = new Response(200, "Created a new player", true, createPlayer);
			return ResponseEntity.status(response.getStatusCode()).body(response);
		}
		
		response = new Response(400, "Failed to create a new player", true, createPlayer);
		return ResponseEntity.status(response.getStatusCode()).body(response);
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
	public ResponseEntity<Response> login(@RequestBody Players newPlayer, HttpServletRequest request) {
		
		Players checkUser = null;
		Response response = null;
		
		try {
			checkUser = playersDAO.findByPlayerUsernameIgnoreCase(newPlayer.getPlayerUsername());
			boolean checkPass = AuthUtil.comparePasswords(newPlayer.getPlayerPassword(), checkUser.getPlayerPassword());
			if(checkPass) {
				request.getSession().setAttribute("currentplayer", checkUser);
				response = new Response(200, "Login successful", true, checkUser);
				return ResponseEntity.status(response.getStatusCode()).body(response);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		
		response = new Response(400, "Incorrect credentials", false, checkUser);
		return ResponseEntity.status(response.getStatusCode()).body(response);
	}
	
	@RequestMapping(value = "/mysession", method = RequestMethod.GET)
	public ResponseEntity<Response> login(HttpServletRequest request) {
		Response response = null;
		Players curPlayer = null;
		try {
			curPlayer = (Players) request.getSession().getAttribute("currentplayer");
			if(curPlayer != null) {
				response = new Response(200, "Session found", true, curPlayer);
				return ResponseEntity.status(response.getStatusCode()).body(response);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		response = new Response(400, "Missing session", false, curPlayer);
		return ResponseEntity.status(response.getStatusCode()).body(response);
	}

	@GetMapping(value = "/byId/{id}")
	public ResponseEntity<Players> findById(@PathVariable int id){
		
		Optional<Players> playersOptional = playersDAO.findById(id);

		if(playersOptional.isPresent()){
			Players p = playersOptional.get();

			return ResponseEntity.ok(p);
		}

		return ResponseEntity.noContent().build();

	}

	@GetMapping(value = "/byName/{name}")
	public ResponseEntity<Players> findByPlayerUsername(@PathVariable String playerUsername){

		Optional<Players> playersOptional = playersDAO.findByPlayerUsername(playerUsername);

		if(playersOptional.isPresent()){
			Players p = playersOptional.get();

			return ResponseEntity.ok(p);
		}

		return ResponseEntity.noContent().build();
		
	}

	@DeleteMapping(value = "/byId/{id}")
	public void deletePlayers(@PathVariable int id){

		playersDAO.deleteById(id);
		
	}

}
