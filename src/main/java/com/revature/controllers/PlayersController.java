package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.jeopardy.daos.PlayersDAO;

@Repository
@RequestMapping(value="/players")
public class PlayersController {
	
	@Autowired
	private PlayersDAO playersDAO;

}
