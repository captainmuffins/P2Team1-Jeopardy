package com.revature.jeopardy.daos;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import com.revature.jeopardy.models.Players;

@Repository
public class PlayersDAO implements PlayersDAOInterface {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public Players createNewPlayer(Players newPlayer) {
		// TODO Auto-generated method stub
		String SQL = "INSERT INTO players(player_username, player_password, player_email, player_first_name, player_last_name)\r\n"
				+ "VALUES(?, ?, ?, ?, ?) RETURNING *";
		try {
			Players createdPlayer = jdbcTemplate.query(
					SQL,
					new PreparedStatementSetter() {
						public void setValues(PreparedStatement ps) throws SQLException {
							ps.setString(1, newPlayer.getPlayer_username());
							ps.setString(2, newPlayer.getPlayer_password());
							ps.setString(3, newPlayer.getPlayer_email());
							ps.setString(4, newPlayer.getPlayer_first_name());
							ps.setString(5, newPlayer.getPlayer_last_name());
						}
					},
					new ResultSetExtractor<Players>() {
						public Players extractData(ResultSet rs) throws SQLException,
								DataAccessException {
							if (rs.next()) {
								Players createdPlayer = new Players(
										rs.getInt("player_id"),
										rs.getString("player_username"),
										rs.getString("player_password"),
										rs.getString("player_email"),
										rs.getString("player_first_name"),
										rs.getString("player_last_name"));
								return createdPlayer;
							}
							return null;
						}
					});

			return createdPlayer;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}

}
