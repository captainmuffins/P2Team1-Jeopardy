package com.revature.jeopardy.daos;

import com.revature.jeopardy.models.Games;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GamesDAO extends JpaRepository<Games, Integer> {
}
