package com.revature.jeopardy.models;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "games")
@Component
public class Games {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gameId;

    @Column(nullable = false)
    private Timestamp gameCreated;

	public Games() {
		super();
	}

	public Games(Timestamp gameCreated) {
		super();
		this.gameCreated = gameCreated;
	}

	public Games(int gameId, Timestamp gameCreated) {
		super();
		this.gameId = gameId;
		this.gameCreated = gameCreated;
	}

	public int getGameId() {
		return gameId;
	}

	public void setGameId(int gameId) {
		this.gameId = gameId;
	}

	public Timestamp getGameCreated() {
		return gameCreated;
	}

	public void setGameCreated(Timestamp gameCreated) {
		this.gameCreated = gameCreated;
	}

	@Override
	public String toString() {
		return "Games [gameId=" + gameId + ", gameCreated=" + gameCreated + "]";
	}
    
}
