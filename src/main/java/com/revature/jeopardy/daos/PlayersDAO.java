package com.revature.jeopardy.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.jeopardy.models.Players;

@Repository
public interface PlayersDAO extends JpaRepository<Players, Integer> {

	// Use this to find players ignoring case of username
	Players findByPlayerUsernameIgnoreCase(String username);

}