package com.revature.jeopardy;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;

import com.revature.jeopardy.controllers.GamesController;
import com.revature.jeopardy.controllers.PlayersController;
import com.revature.jeopardy.controllers.SessionController;
import com.revature.jeopardy.dtos.Response;
import com.revature.jeopardy.dtos.SessionDTO;
import com.revature.jeopardy.models.Players;

@SpringBootTest
class JeopardyApplicationTests {

	@Autowired
	private PlayersController pc;

	@Autowired
	private GamesController gc;

	@Autowired
	private SessionController sc;

	@Test
	void contextLoads() {
	}

	@Test
	void createNewPlayerTest(){
		ResponseEntity<Response> response = pc.createNewPlayer(new Players("BillGateReturns", "password", "TotallyBillGates@microsoft.gov", "Bill", "Gates", null));
		assertTrue(response.getBody().isStatusSuccess());
		int id = Integer.parseInt(response.getBody().getStatusMessage());
		response = pc.deletePlayers(id);
		assertTrue(response.getBody().isStatusSuccess());
	}

	@Test
	void findByIdTest(){
		ResponseEntity<Response> response = pc.findById(2);
		assertTrue(response.getBody().isStatusSuccess());
	}

	@Test
	void findByPlayerUsernameTest(){
		ResponseEntity<Response> response = pc.findByPlayerUsername("BillGates");
		assertTrue(response.getBody().isStatusSuccess());
	}

	@Test
	void changePasswordTest(){

		HttpServletRequest request = mock(HttpServletRequest.class);

		HttpSession session = mock(HttpSession.class);
		when(request.getSession()).thenReturn(session);
		Players player = new Players(7, "jotarokujo", "jotarokujo@email.com", "jotaro", "kujo");
		when(request.getSession().getAttribute("currentplayer")).thenReturn(player);

		player.setPlayerPassword("jotarokujo");

		ResponseEntity<Response> response = pc.changePassword(player, request);

		assertTrue(response.getBody().isStatusSuccess());
		
	}

	@Test
	void loginTest(){

		HttpServletRequest request = mock(HttpServletRequest.class);

		HttpSession session = mock(HttpSession.class);
		when(request.getSession()).thenReturn(session);
		Players player = new Players(7, "jotarokujo", "jotarokujo","jotarokujo@email.com", "jotaro", "kujo", null);
		when(request.getSession().getAttribute("currentplayer")).thenReturn(player);


		ResponseEntity<Response> response = pc.login(player, request);
		assertTrue(response.getBody().isStatusSuccess());

	}

	@Test
	void updateProfile(){

		HttpServletRequest request = mock(HttpServletRequest.class);

		HttpSession session = mock(HttpSession.class);
		when(request.getSession()).thenReturn(session);
		Players player = new Players(7, "jotarokujo", "jotarokujo@email.com", "jotaro", "kujo");
		when(request.getSession().getAttribute("currentplayer")).thenReturn(player);

		player.setPlayerFirstname("jotaro");


		ResponseEntity<Response> response = pc.updateProfile(player, request);
		assertTrue(response.getBody().isStatusSuccess());

	}

	@Test
	void getAvatarTest(){

		ResponseEntity<InputStreamResource> response = pc.getAvatar(1);
		assertTrue(response.hasBody());

	}

	@Test
	void gamesTest(){
		ResponseEntity<Response> response = gc.addGame();
		assertTrue(response.getBody().isStatusSuccess());
		assertTrue(response.getBody().getStatusCode() == 202);

		int i = Integer.parseInt(response.getBody().getStatusMessage());

		response = gc.deleteGame(i);
		assertTrue(response.getBody().isStatusSuccess());
	}



	@Test
	void sessionsTest(){
		SessionDTO ses = new SessionDTO(0, false, 8, 160);
		ResponseEntity<Response> response = sc.addSession(ses);
		System.out.println(response.getStatusCode() + " " + response.getBody().getStatusObject());
		System.out.println(response.getBody().getStatusMessage());
		assertTrue(response.getBody().isStatusSuccess());
		int id = Integer.parseInt(response.getBody().getStatusMessage());

		response = sc.updateSession(new SessionDTO(100, true, 1, 1), id);
		assertTrue(response.getBody().isStatusSuccess());

		response = sc.deleteSession(id);
		assertTrue(response.getBody().isStatusSuccess());

	}

	@Test
	void sessionsByPlayerTest(){
		ResponseEntity<Response> response = sc.findByPlayer(2);
		assertTrue(response.getBody().isStatusSuccess());
	}

	@Test 
	void getAllSessionsTest(){
		ResponseEntity<Response> response = sc.getAllSession();
		assertTrue(response.getBody().isStatusSuccess());
	}




}
