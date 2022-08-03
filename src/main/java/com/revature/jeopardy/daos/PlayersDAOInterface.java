package com.revature.jeopardy.daos;

import org.springframework.stereotype.Repository;

import com.revature.jeopardy.models.Players;

@Repository
public interface PlayersDAOInterface {

// I'm not sure if we should use CrudRepository yet (?)
//	@Modifying
//	@Query("INSERT player(player_username, player_password, player_email, player_first_name, player_last_name)\r\n"
//			+ "VALUES(:player_username, :player_password, :player_email, :player_first_name, :player_last_name) RETURNING *")
//	Players createNewPlayer(@Param("player_username") String player_username,
//			@Param("player_password") String player_password, @Param("player_email") String player_email,
//			@Param("player_first_name") String player_first_name, @Param("player_last_name") String player_last_name);
	
	
	Players createNewPlayer(Players newPlayer);
}
