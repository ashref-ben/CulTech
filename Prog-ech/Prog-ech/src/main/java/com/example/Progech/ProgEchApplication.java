package com.example.Progech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ProgEchApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProgEchApplication.class, args);
	}

}
