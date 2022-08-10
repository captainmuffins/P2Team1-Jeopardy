package com.revature.jeopardy.daos;

import com.revature.jeopardy.models.Session;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SessionDAO extends JpaRepository<Session, Integer> {


    List<Session> findAllByOrderBySessionWinningsDesc();

    List<Session> findBySessionIdOrderBySessionWinningsDesc(int sessionId);

}
