package com.revature.jeopardy.controllers;

import java.io.IOException;
import java.io.InputStream;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.io.ByteStreams;
import com.revature.jeopardy.daos.PlayersDAO;
import com.revature.jeopardy.dtos.Response;
import com.revature.jeopardy.models.Players;
import com.revature.jeopardy.utils.AuthUtil;

import io.micrometer.core.instrument.util.StringUtils;

@RestController
@RequestMapping(value = "/players")
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
		if (createPlayer != null) {
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
			if (checkPass) {
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
		Players session = null;
		Players curPlayer = null;
		try {
			session = (Players) request.getSession().getAttribute("currentplayer");
			if (session != null) {
				curPlayer = playersDAO.findById(session.getPlayerId()).get();

				response = new Response(200, "Session found", true, curPlayer);
				return ResponseEntity.status(response.getStatusCode()).body(response);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		response = new Response(400, "Missing session", false, curPlayer);
		return ResponseEntity.status(response.getStatusCode()).body(response);
	}

	@GetMapping(value = "/byId/{playerId}")
	public ResponseEntity<Response> findById(@PathVariable("playerId") int playerId) {

		Players findPlayer = null;
		Response response = null;

		Optional<Players> playersOptional = playersDAO.findById(playerId);

		if (!playersOptional.isEmpty()) {
			findPlayer = playersOptional.get();

			response = new Response(200, "Found player by ID", true, findPlayer);
			return ResponseEntity.status(response.getStatusCode()).body(response);
		}

		response = new Response(400, "Could not find player by ID", false, findPlayer);
		return ResponseEntity.status(response.getStatusCode()).body(response);

	}

	@GetMapping(value = "/byName/{playerUsername}")
	public ResponseEntity<Response> findByPlayerUsername(@PathVariable("playerUsername") String playerUsername) {

		Players findPlayer = null;
		Response response = null;
		try {
			findPlayer = playersDAO.findByPlayerUsernameIgnoreCase(playerUsername);

			response = new Response(200, "Found player by username", true, findPlayer);
			return ResponseEntity.status(response.getStatusCode()).body(response);

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		response = new Response(400, "Could not find player by that username", false, findPlayer);
		return ResponseEntity.status(response.getStatusCode()).body(response);

	}

	@DeleteMapping(value = "/byId/{playerId}")
	public void deletePlayers(@PathVariable("playerId") int playerId) {
		// TODO - Must return JSON response
		playersDAO.deleteById(playerId);

	}

	@RequestMapping(method = RequestMethod.PUT, value = "/profile", consumes = "application/json")
	public ResponseEntity<Response> updateProfile(@RequestBody Players newData, HttpServletRequest request) {
		Optional<Players> getPlayer = null;
		Players updatedPlayer = null;
		Players session = null;
		Response response = null;
		try {
			// Security measure. User must be logged in to use this endpoint.
			session = (Players) request.getSession().getAttribute("currentplayer");
			if (session != null) {
				getPlayer = playersDAO.findById(session.getPlayerId());
				if (!getPlayer.isEmpty()) {
					Players p = getPlayer.get();
					p.setPlayerUsername(
							StringUtils.isNotEmpty(newData.getPlayerUsername()) ? newData.getPlayerUsername()
									: p.getPlayerUsername());
					p.setPlayerEmail(StringUtils.isNotEmpty(newData.getPlayerEmail()) ? newData.getPlayerEmail()
							: p.getPlayerEmail());
					p.setPlayerFirstname(
							StringUtils.isNotEmpty(newData.getPlayerFirstname()) ? newData.getPlayerFirstname()
									: p.getPlayerFirstname());
					p.setPlayerLastname(
							StringUtils.isNotEmpty(newData.getPlayerLastname()) ? newData.getPlayerLastname()
									: p.getPlayerLastname());

					updatedPlayer = playersDAO.save(p);

					response = new Response(200, "Updated profile", true, updatedPlayer);
					return ResponseEntity.status(response.getStatusCode()).body(response);
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		response = new Response(400, "Failed to update profile", false, updatedPlayer);
		return ResponseEntity.status(response.getStatusCode()).body(response);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/password", consumes = "application/json")
	public ResponseEntity<Response> changePassword(@RequestBody Players newPassword, HttpServletRequest request) {

		Optional<Players> getPlayer = null;
		Players updatedPlayer = null;
		Players session = null;
		Response response = null;
		try {
			// Security measure. User must be logged in to use this endpoint.
			session = (Players) request.getSession().getAttribute("currentplayer");
			if (session != null) {
				getPlayer = playersDAO.findById(session.getPlayerId());
				if (!getPlayer.isEmpty()) {
					Players p = getPlayer.get();
					p.setPlayerPassword(StringUtils.isNotEmpty(newPassword.getPlayerPassword())
							? AuthUtil.doEncrypt(newPassword.getPlayerPassword())
							: p.getPlayerPassword());

					updatedPlayer = playersDAO.save(p);

					response = new Response(200, "Password changed", true, updatedPlayer);
					return ResponseEntity.status(response.getStatusCode()).body(response);
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		response = new Response(400, "Failed to change password", false, updatedPlayer);
		return ResponseEntity.status(response.getStatusCode()).body(response);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/avatar/{id}", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public ResponseEntity<Response> updateAvatar(@PathVariable int id, @RequestBody InputStream dataStream) {
		// TODO - Fix this
		Optional<Players> playersOptional = playersDAO.findById(id);
		Players updatedPlayer = null;
		Response response = null;

		if (playersOptional.isPresent()) {

			byte[] avatar = null;
			try {
				avatar = ByteStreams.toByteArray(dataStream);
				Players p = playersOptional.get();
				p.setPlayerAvatar(avatar);
				updatedPlayer = playersDAO.save(p);

				response = new Response(200, "Updated avatar", true, updatedPlayer);
				return ResponseEntity.status(response.getStatusCode()).body(response);
			} catch (IOException ex) {
				// TODO Auto-generated catch block
				ex.printStackTrace();
			}

		}

		response = new Response(400, "Failed to update avatar", false, updatedPlayer);
		return ResponseEntity.status(response.getStatusCode()).body(response);

	}

}
