package it.esempio.progettomodulare.war;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.web.WebApplicationInitializer;

@SpringBootApplication
@EnableZuulProxy
public class Main extends SpringBootServletInitializer implements WebApplicationInitializer {
	
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(new Class[] { Main.class });
	}
}
