package com.revature.jeopardy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class JeopardyApplication {

	public static void main(String[] args) {
		SpringApplication.run(JeopardyApplication.class, args);
	}

	/*
	 * Global CORS configuration
	 */

	@Bean
	WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				/*
				 * Allow on all API endpoint paths Allow all methods - GET, POST, PUT, DELETE,
				 * OPTIONS, and etc. Allow cross-origin requests from http://localhost
				 * (Frontend) Allow receiving of credentials (if using withCredentials option
				 * with observables from angular)
				 */
				registry
				.addMapping("/**")
				.allowedMethods("*")
				.allowedOrigins("http://localhost", "https://localhost",
						"https://revaturejeopardyproject.space/")
				.allowCredentials(true);
			}
		};
	}
}
