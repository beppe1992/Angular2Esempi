package it.esempio.progettomodulare.applicazionericerca;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/anagrafiche")
public class AnagraficheController {

	List<String> anagrafiche = Arrays.asList(new String[] { "Giuseppe", "Giordano" });

	@RequestMapping("/all")
	public List<String> getAll() {
		return anagrafiche;
	}

}
