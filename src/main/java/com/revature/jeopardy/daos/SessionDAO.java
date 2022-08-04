package com.revature.jeopardy.daos;

import com.revature.jeopardy.models.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionDAO extends JpaRepository<Session, Integer> {
}
