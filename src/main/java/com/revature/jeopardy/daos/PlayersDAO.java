package com.revature.jeopardy.daos;

import com.revature.jeopardy.models.Players;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayersDAO extends JpaRepository<Players, Integer> {
}
