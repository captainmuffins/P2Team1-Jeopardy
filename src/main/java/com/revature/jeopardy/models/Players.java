package com.revature.jeopardy.models;

import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table(name = "players")
@Component
public class Players {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int playerId;

	@Column(unique = true, nullable = false)
	private String playerUsername;

	@Column(nullable = false)
	private String playerPassword;

	@Column(nullable = false)
	private String playerEmail;

	@Column(nullable = false)
	private String playerFirstname;

	@Column(nullable = false)
	private String playerLastname;

	@Column
	private byte[] playerAvatar;

	public Players() {
		super();
	}

	public Players(String playerUsername, String playerPassword, String playerEmail, String playerFirstname,
			String playerLastname, byte[] playerAvatar) {
		super();
		this.playerUsername = playerUsername;
		this.playerPassword = playerPassword;
		this.playerEmail = playerEmail;
		this.playerFirstname = playerFirstname;
		this.playerLastname = playerLastname;
		this.playerAvatar = playerAvatar;
	}

	public Players(int playerId, String playerUsername, String playerPassword, String playerEmail,
			String playerFirstname, String playerLastname, byte[] playerAvatar) {
		super();
		this.playerId = playerId;
		this.playerUsername = playerUsername;
		this.playerPassword = playerPassword;
		this.playerEmail = playerEmail;
		this.playerFirstname = playerFirstname;
		this.playerLastname = playerLastname;
		this.playerAvatar = playerAvatar;
	}

	public int getPlayerId() {
		return playerId;
	}

	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}

	public String getPlayerUsername() {
		return playerUsername;
	}

	public void setPlayerUsername(String playerUsername) {
		this.playerUsername = playerUsername;
	}

	public String getPlayerPassword() {
		return playerPassword;
	}

	public void setPlayerPassword(String playerPassword) {
		this.playerPassword = playerPassword;
	}

	public String getPlayerEmail() {
		return playerEmail;
	}

	public void setPlayerEmail(String playerEmail) {
		this.playerEmail = playerEmail;
	}

	public String getPlayerFirstname() {
		return playerFirstname;
	}

	public void setPlayerFirstname(String playerFirstname) {
		this.playerFirstname = playerFirstname;
	}

	public String getPlayerLastname() {
		return playerLastname;
	}

	public void setPlayerLastname(String playerLastname) {
		this.playerLastname = playerLastname;
	}

	public byte[] getPlayerAvatar() {
		return playerAvatar;
	}

	public void setPlayerAvatar(byte[] playerAvatar) {
		this.playerAvatar = playerAvatar;
	}

	@Override
	public String toString() {
		return "Players [playerId=" + playerId + ", playerUsername=" + playerUsername + ", playerPassword="
				+ playerPassword + ", playerEmail=" + playerEmail + ", playerFirstname=" + playerFirstname
				+ ", playerLastname=" + playerLastname + ", playerAvatar=" + Arrays.toString(playerAvatar) + "]";
	}

}
