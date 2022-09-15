package com.employee.service;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeServiceApplication {
	public static void main(String[] args) throws IOException {
		SpringApplication.run(EmployeeServiceApplication.class, args);
// 		Runtime.getRuntime().exec(new String[] {"cmd", "/K", "Start"});
	}
}
