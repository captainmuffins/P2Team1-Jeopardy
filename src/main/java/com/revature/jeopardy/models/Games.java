package com.revature.jeopardy.models;

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

    @Column(nullable = false)
    private Timestamp game_created;

    // BOILERPLATE ------------------------------------------------------------------------------
    public Games() {
    }

    public Games(int game_id, Timestamp game_created) {
        this.game_id = game_id;
        this.game_created = game_created;
    }

    public Games(Timestamp game_created) {
        this.game_created = game_created;
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

    @Override
    public String toString() {
        return "Games [game_created=" + game_created + ", game_id=" + game_id + "]";
    }

    

}
