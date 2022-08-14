package com.revature.jeopardy;

import static org.junit.Assert.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import com.revature.jeopardy.controllers.GamesController;
import com.revature.jeopardy.controllers.PlayersController;
import com.revature.jeopardy.dtos.Response;
import com.revature.jeopardy.models.Players;

@SpringBootTest
class JeopardyApplicationTests {

	@Autowired
	private PlayersController pc;

	@Autowired
	private GamesController gc;

	@Test
	void contextLoads() {
	}

	@Test
	void createNewPlayerTest(){
		ResponseEntity<Response> response = pc.createNewPlayer(new Players("BillGates", "password", "TotallyBillGates@microsoft.gov", "Bill", "Gates", null));
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
	void gamesTest(){
		ResponseEntity<Response> response = gc.addGame();
		assertTrue(response.getBody().isStatusSuccess());
		assertTrue(response.getBody().getStatusCode() == 202);
	}







}
