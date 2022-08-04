package com.revature.jeopardy.models;

import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table(name="players")
@Component
public class Players {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int player_id;

    @Column(unique = true)
    private String player_username;

    @Column
    private String player_password;

    @Column
    private String player_email;

    @Column
    private String player_first_name;

    @Column
    private String player_last_name;

    @Column
    private byte[] player_avatar;

    // BOILERPLATE ------------------------------------------------------------------------------------------------------
    public Players() {
    }

    public Players(int player_id, String player_username, String player_password, String player_email, String player_first_name, String player_last_name, byte[] player_avatar) {
        this.player_id = player_id;
        this.player_username = player_username;
        this.player_password = player_password;
        this.player_email = player_email;
        this.player_first_name = player_first_name;
        this.player_last_name = player_last_name;
        this.player_avatar = player_avatar;
    }

    public Players(String player_username, String player_password, String player_email, String player_first_name, String player_last_name, byte[] player_avatar) {
        this.player_username = player_username;
        this.player_password = player_password;
        this.player_email = player_email;
        this.player_first_name = player_first_name;
        this.player_last_name = player_last_name;
        this.player_avatar = player_avatar;
    }

    public int getPlayer_id() {
        return player_id;
    }

    public void setPlayer_id(int player_id) {
        this.player_id = player_id;
    }

    public String getPlayer_username() {
        return player_username;
    }

    public void setPlayer_username(String player_username) {
        this.player_username = player_username;
    }

    public String getPlayer_password() {
        return player_password;
    }

    public void setPlayer_password(String player_password) {
        this.player_password = player_password;
    }

    public String getPlayer_email() {
        return player_email;
    }

    public void setPlayer_email(String player_email) {
        this.player_email = player_email;
    }

    public String getPlayer_first_name() {
        return player_first_name;
    }

    public void setPlayer_first_name(String player_first_name) {
        this.player_first_name = player_first_name;
    }

    public String getPlayer_last_name() {
        return player_last_name;
    }

    public void setPlayer_last_name(String player_last_name) {
        this.player_last_name = player_last_name;
    }

    public byte[] getPlayer_avatar() {
        return player_avatar;
    }

    public void setPlayer_avatar(byte[] player_avatar) {
        this.player_avatar = player_avatar;
    }

    @Override
    public String toString() {
        return "Players{" +
                "player_id=" + player_id +
                ", player_username='" + player_username + '\'' +
                ", player_password='" + player_password + '\'' +
                ", player_email='" + player_email + '\'' +
                ", player_first_name='" + player_first_name + '\'' +
                ", player_last_name='" + player_last_name + '\'' +
                ", player_avatar=" + Arrays.toString(player_avatar) +
                '}';
    }
}
