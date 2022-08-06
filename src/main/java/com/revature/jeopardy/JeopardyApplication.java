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
	 *  Global CORS configuration
	 */
	
    @Bean
    WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
            	/*
            	 *  allow on all endpoint paths
            	 *  allow all methods - GET, POST, PUT, OPTIONS etc
            	 *  allow requests from http://localhost (frontend)
            	 *  allow credentials (withCredentials from angular)
            	 */
                registry.addMapping("/**").allowedMethods("*").allowedOrigins("http://localhost").allowCredentials(true);
            }
        };
    }
}
