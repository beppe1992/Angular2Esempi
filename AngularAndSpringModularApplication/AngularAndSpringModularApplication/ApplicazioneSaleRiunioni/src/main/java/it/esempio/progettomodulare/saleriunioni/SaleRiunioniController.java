package it.esempio.progettomodulare.saleriunioni;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sale")
public class SaleRiunioniController {

	List<String> sale = Arrays.asList(new String[] { "Sala1", "Sala2" });

	@RequestMapping("/all")
	public List<String> getAll() {
		return sale;
	}

}
