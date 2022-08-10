package com.revature.jeopardy.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "session")
@Component
public class Session {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sessionId;

	@Column
	private int sessionWinnings = 0;

	@Column(nullable = false)
	private boolean sessionWinner = false;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "playerId", nullable = false)
	private Players sessionPlayerfk;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "gameId", nullable = false)
	private Games sessionGamefk;

	public Session() {
		super();
	}

	public Session(int sessionWinnings, boolean sessionWinner, Players sessionPlayerfk, Games sessionGamefk) {
		super();
		this.sessionWinnings = sessionWinnings;
		this.sessionWinner = sessionWinner;
		this.sessionPlayerfk = sessionPlayerfk;
		this.sessionGamefk = sessionGamefk;
	}

	public Session(int sessionId, int sessionWinnings, boolean sessionWinner, Players sessionPlayerfk,
			Games sessionGamefk) {
		super();
		this.sessionId = sessionId;
		this.sessionWinnings = sessionWinnings;
		this.sessionWinner = sessionWinner;
		this.sessionPlayerfk = sessionPlayerfk;
		this.sessionGamefk = sessionGamefk;
	}

	public int getSessionId() {
		return sessionId;
	}

	public void setSessionId(int sessionId) {
		this.sessionId = sessionId;
	}

	public double getSessionWinnings() {
		return sessionWinnings;
	}

	public void setSessionWinnings(int sessionWinnings) {
		this.sessionWinnings = sessionWinnings;
	}

	public boolean isSessionWinner() {
		return sessionWinner;
	}

	public void setSessionWinner(boolean sessionWinner) {
		this.sessionWinner = sessionWinner;
	}

	public Players getSessionPlayerfk() {
		return sessionPlayerfk;
	}

	public void setSessionPlayerfk(Players sessionPlayerfk) {
		this.sessionPlayerfk = sessionPlayerfk;
	}

	public Games getSessionGamefk() {
		return sessionGamefk;
	}

	public void setSessionGamefk(Games sessionGamefk) {
		this.sessionGamefk = sessionGamefk;
	}

	@Override
	public String toString() {
		return "Session [sessionId=" + sessionId + ", sessionWinnings=" + sessionWinnings + ", sessionWinner="
				+ sessionWinner + ", sessionPlayerfk=" + sessionPlayerfk + ", sessionGamefk=" + sessionGamefk + "]";
	}

}
