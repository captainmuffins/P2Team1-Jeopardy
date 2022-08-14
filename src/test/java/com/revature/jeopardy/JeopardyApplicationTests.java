package com.revature.jeopardy;

import static org.junit.Assert.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;

import com.revature.jeopardy.controllers.GamesController;
import com.revature.jeopardy.controllers.PlayersController;
import com.revature.jeopardy.controllers.SessionController;
import com.revature.jeopardy.dtos.Response;
import com.revature.jeopardy.models.Players;
import com.revature.jeopardy.models.Games;
import com.revature.jeopardy.models.Session;

@SpringBootTest
@AutoConfigureTestDatabase
@ContextConfiguration(locations = "/test-context.xml")
class JeopardyApplicationTests {

	@Autowired
	private PlayersController pc;

	@Autowired
	private SessionController sc;

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
		ResponseEntity<Response> response = pc.findByPlayerUsername("henrysmith");
		assertTrue(response.getBody().isStatusSuccess());
	}

	@Test
	void deletePlayersTest(){
		
	}




}
