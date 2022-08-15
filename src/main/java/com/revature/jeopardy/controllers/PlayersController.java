package com.revature.jeopardy.controllers;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.apache.tika.config.TikaConfig;
import org.apache.tika.io.TikaInputStream;
import org.apache.tika.metadata.Metadata;
import org.apache.tika.mime.MimeType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.annotation.Scope;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.revature.jeopardy.daos.PlayersDAO;
import com.revature.jeopardy.daos.PlayersSummary;
import com.revature.jeopardy.dtos.Response;
import com.revature.jeopardy.models.Players;
import com.revature.jeopardy.utils.AuthUtil;

import io.micrometer.core.instrument.util.StringUtils;

@Controller
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
			response = new Response(200, createPlayer.getPlayerId()+"", true, createPlayer);
			return ResponseEntity.status(response.getStatusCode()).body(response);
		}

		response = new Response(400, "Failed to create a new player", true, createPlayer);
		return ResponseEntity.status(response.getStatusCode()).body(response);
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
	@CacheEvict(value = "avatars", allEntries = true)
	public ResponseEntity<Response> login(@RequestBody Players newPlayer, HttpServletRequest request) {

		Players checkUser = null;
		Response response = null;

		try {
			PlayersSummary ps = playersDAO.findByPlayerUsernameIgnoreCase(newPlayer.getPlayerUsername()).get(0);
			checkUser = new Players(ps.getPlayerId(), ps.getPlayerUsername(), ps.getPlayerPassword(),
					ps.getPlayerEmail(), ps.getPlayerFirstname(), ps.getPlayerLastname(), null);
			boolean checkPass = AuthUtil.comparePasswords(newPlayer.getPlayerPassword(), checkUser.getPlayerPassword());
			if (checkPass) {
				checkUser.setPlayerAvatar(null);
				checkUser.setPlayerPassword(null);
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
	public ResponseEntity<Response> mySession(HttpServletRequest request) {
		Response response = null;
		Players session = null;
		PlayersSummary curPlayer = null;
		try {
			session = (Players) request.getSession().getAttribute("currentplayer");
			if (session != null) {
				curPlayer = playersDAO.findByPlayerId(session.getPlayerId()).get(0);

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

		if (playersOptional.isPresent()) {
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
			PlayersSummary ps = playersDAO.findByPlayerUsernameIgnoreCase(playerUsername).get(0);
			findPlayer = new Players(ps.getPlayerId(), ps.getPlayerUsername(), ps.getPlayerPassword(),
					ps.getPlayerEmail(), ps.getPlayerFirstname(), ps.getPlayerLastname(), null);

			response = new Response(200, "Found player by username", true, findPlayer);
			return ResponseEntity.status(response.getStatusCode()).body(response);

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		response = new Response(400, "Could not find player by that username", false, findPlayer);
		return ResponseEntity.status(response.getStatusCode()).body(response);

	}

	@DeleteMapping(value = "/byId/{playerId}")
	public ResponseEntity<Response> deletePlayers(@PathVariable("playerId") int playerId) {
		Response response = null;
		try {
			playersDAO.deleteById(playerId);

			response = new Response(200, "Deleted Player", true, null);
			return ResponseEntity.status(response.getStatusCode()).body(response);

		} catch (Exception e) {
			e.printStackTrace();
		}

		response = new Response(500, "Could not delete player", true, null);
		return ResponseEntity.status(response.getStatusCode()).body(response);

	}

	@RequestMapping(method = RequestMethod.PUT, value = "/profile", consumes = "application/json")
	@CacheEvict(value = "avatars", allEntries = true)
	public ResponseEntity<Response> updateProfile(@RequestBody Players newData, HttpServletRequest request) {
		Optional<Players> getPlayer = null;
		Players session = null;
		Response response = null;
		try {
			// Security measure. User must be logged in to use this endpoint.
			session = (Players) request.getSession().getAttribute("currentplayer");
			if (session != null) {
				getPlayer = playersDAO.findById(session.getPlayerId());
				if (getPlayer.isPresent()) {
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

					p = playersDAO.save(p);
					p.setPlayerAvatar(null);
					p.setPlayerPassword(null);

					response = new Response(200, "Updated profile", true, p);
					return ResponseEntity.status(response.getStatusCode()).body(response);
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		response = new Response(400, "Failed to update profile", false, null);
		return ResponseEntity.status(response.getStatusCode()).body(response);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/password", consumes = "application/json")
	public ResponseEntity<Response> changePassword(@RequestBody Players newPassword, HttpServletRequest request) {

		Optional<Players> getPlayer = null;
		Players session = null;
		Response response = null;
		try {
			// Security measure. User must be logged in to use this endpoint.
			session = (Players) request.getSession().getAttribute("currentplayer");
			if (session != null) {
				getPlayer = playersDAO.findById(session.getPlayerId());
				if (getPlayer.isPresent()) {
					Players p = getPlayer.get();
					p.setPlayerPassword(StringUtils.isNotEmpty(newPassword.getPlayerPassword())
							? AuthUtil.doEncrypt(newPassword.getPlayerPassword())
							: p.getPlayerPassword());

					p = playersDAO.save(p);
					p.setPlayerAvatar(null);
					p.setPlayerPassword(null);

					response = new Response(200, "Password changed", true, p);
					return ResponseEntity.status(response.getStatusCode()).body(response);
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		response = new Response(400, "Failed to change password", false, null);
		return ResponseEntity.status(response.getStatusCode()).body(response);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/avatar", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@CacheEvict(value = "avatars", allEntries = true)
	public ResponseEntity<Response> updateAvatar(@RequestPart("playerAvatar") MultipartFile document,
			HttpServletRequest request) {
		Optional<Players> getPlayer = null;
		Players session = null;
		Response response = null;
		try {
			// Security measure. User must be logged in to use this endpoint.
			session = (Players) request.getSession().getAttribute("currentplayer");

			if (session != null) {
				getPlayer = playersDAO.findById(session.getPlayerId());
				if (getPlayer.isPresent()) {
					Players p = getPlayer.get();
					p.setPlayerAvatar(document.getBytes());
					p = playersDAO.save(p);
					p.setPlayerAvatar(null);
					p.setPlayerPassword(null);

					response = new Response(200, "Updated avatar", true, p);
					return ResponseEntity.status(response.getStatusCode()).body(response);
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		response = new Response(400, "Failed to update avatar", false, null);
		return ResponseEntity.status(response.getStatusCode()).body(response);

	}

	@GetMapping(value = "/avatar/{playerId}")
	@Cacheable("avatars") // Enable caching on avatars for faster loading
	public ResponseEntity<InputStreamResource> getAvatar(@PathVariable("playerId") int playerId) {

		Optional<Players> getPlayer = null;
		try {

			getPlayer = playersDAO.findById(playerId);
			if (getPlayer.isPresent()) {
				Players p = getPlayer.get();
				if (p.getPlayerAvatar() != null) {
					TikaConfig tika = new TikaConfig();
					Metadata metaData = new Metadata();

					InputStream is = new ByteArrayInputStream(p.getPlayerAvatar());
					InputStreamResource isr = new InputStreamResource(is);

					org.apache.tika.mime.MediaType mediaType = tika.getDetector().detect(TikaInputStream.get(is),
							metaData);
					MimeType mimeType = tika.getMimeRepository().forName(mediaType.toString());
					HttpHeaders responseHeaders = new HttpHeaders();
					responseHeaders.set("Content-Disposition",
							"inline; filename=\"" + System.currentTimeMillis() + mimeType.getExtension() + "\"");
					responseHeaders.set("Content-Type", mediaType.getType() + "/" + mediaType.getSubtype());
					return ResponseEntity.ok().headers(responseHeaders).body(isr);
				} else {
					Resource resource = new ClassPathResource("img/default_avatar_alt.png");

					InputStream input = resource.getInputStream();
					InputStreamResource isr = new InputStreamResource(input);
					HttpHeaders responseHeaders = new HttpHeaders();
					responseHeaders.set("Content-Disposition", "inline; filename=\"default_avatar_alt.png\"");
					responseHeaders.set("Content-Type", "image/png");
					return ResponseEntity.ok().headers(responseHeaders).body(isr);
				}

			}

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return ResponseEntity.status(404).body(null);

	}

};
