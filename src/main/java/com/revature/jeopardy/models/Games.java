package com.revature.jeopardy.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "games")
@Component
public class Games {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int game_id;

    @Column
    private Timestamp game_created;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "player_id")
    private Players game_player_fk;


    // BOILERPLATE ------------------------------------------------------------------------------
    public Games() {
    }

    public Games(int game_id, Timestamp game_created, Players game_player_fk) {
        this.game_id = game_id;
        this.game_created = game_created;
        this.game_player_fk = game_player_fk;
    }

    public Games(Timestamp game_created, Players game_player_fk) {
        this.game_created = game_created;
        this.game_player_fk = game_player_fk;
    }

    @Autowired
    public Games(Players game_player_fk) {
        this.game_player_fk = game_player_fk;
    }

    public int getGame_id() {
        return game_id;
    }

    public void setGame_id(int game_id) {
        this.game_id = game_id;
    }

    public Timestamp getGame_created() {
        return game_created;
    }

    public void setGame_created(Timestamp game_created) {
        this.game_created = game_created;
    }

    public Players getGame_player_fk() {
        return game_player_fk;
    }

    public void setGame_player_fk(Players game_player_fk) {
        this.game_player_fk = game_player_fk;
    }

    @Override
    public String toString() {
        return "Games{" +
                "game_id=" + game_id +
                ", game_created=" + game_created +
                ", game_player_fk=" + game_player_fk +
                '}';
    }
}
