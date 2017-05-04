package it.angular.angularandspringboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.angular.angularandspringboot.pojo.Partita;
import it.angular.angularandspringboot.service.PunteggiService;

@RestController
public class PunteggioLiveController {

	@Autowired
	private PunteggiService service;

	/**
	 * 
	 * @return
	 */
	@RequestMapping("/punteggi")
	public List<Partita> getScores() {

		return service.getPartite();
	}
}
