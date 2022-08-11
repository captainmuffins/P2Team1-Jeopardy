package com.revature.jeopardy.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.jeopardy.models.Players;

@Repository
public interface PlayersDAO extends JpaRepository<Players, Integer> {

	// Use this to find players ignoring case of username
	Players findByPlayerUsernameIgnoreCase(String playerUsername);
	
	// Use a projection interface so it will only grab specific columns
	List<PlayersSummary> findByPlayerId(int playerId);

}
