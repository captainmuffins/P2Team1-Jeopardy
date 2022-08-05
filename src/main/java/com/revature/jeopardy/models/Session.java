package com.revature.jeopardy.models;

import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
@Table(name = "session")
@Component
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int session_id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "player_id", nullable = false)
    private Players session_player_fk;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "game_id", nullable = false)
    private Games session_game_fk;

    @Column(nullable = false)
    private boolean session_winner = false;

    // BOILERPLATE ------------------------------------------------------------------------------
    public Session() {
    }

    public Session(int session_id, Players session_player_fk, Games session_game_fk, boolean session_winner) {
        this.session_id = session_id;
        this.session_player_fk = session_player_fk;
        this.session_game_fk = session_game_fk;
        this.session_winner = session_winner;
    }

    public Session(Players session_player_fk, Games session_game_fk, boolean session_winner) {
        this.session_player_fk = session_player_fk;
        this.session_game_fk = session_game_fk;
        this.session_winner = session_winner;
    }

    public int getSession_id() {
        return session_id;
    }

    public void setSession_id(int session_id) {
        this.session_id = session_id;
    }

    public Players getSession_player_fk() {
        return session_player_fk;
    }

    public void setSession_player_fk(Players session_player_fk) {
        this.session_player_fk = session_player_fk;
    }

    public Games getSession_game_fk() {
        return session_game_fk;
    }

    public void setSession_game_fk(Games session_game_fk) {
        this.session_game_fk = session_game_fk;
    }

    public boolean isSession_winner() {
        return session_winner;
    }

    public void setSession_winner(boolean session_winner) {
        this.session_winner = session_winner;
    }

    @Override
    public String toString() {
        return "Session{" +
                "session_id=" + session_id +
                ", session_player_fk=" + session_player_fk +
                ", session_game_fk=" + session_game_fk +
                ", session_winner=" + session_winner +
                '}';
    }
}
