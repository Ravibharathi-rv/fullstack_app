package com.fullstack.backend.fullstackapplication.hellowowrld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


//controller
@CrossOrigin(origins="http://localhost:4200")   // it removes the cors error when the request coming from given url
@RestController
public class HelloWorldCOntroller {
	
	//using RequestMapping
	@RequestMapping(path="/hello",method=RequestMethod.GET)
	public String hello() {
		return "Hello World";
	}
	
	//GET Mapping
	@GetMapping(path="/helloget")
	public String helloworld() {
		
		return "Hello World GET Mapping test";
	}
	
	//Return bean
	@GetMapping(path="/hbean")
	public HelloWorld helloWorldBean() {
		return new HelloWorld("Hell World bean test");
	}
	
	
	//hbean/pathvari/Ravi  ==> for Error handling test
	@GetMapping(path="/hbean/exceptionTest/{name}")
	public RuntimeException RUntimeExceptionTest(@PathVariable String name ) {
	//	return new HelloWorld(String.format("Hell World %s",name));
		return new RuntimeException("Something wrong, contact support");
	}
	
	
	@GetMapping(path="/hbean/pathvari/{name}")
	public HelloWorld helloWorldBean(@PathVariable String name ) {
		return new HelloWorld("Hello "+name);
		
	}
	
}
