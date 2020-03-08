package com.fullstack.backend.fullstackapplication.websecurity;


import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuthentcation extends WebSecurityConfigurerAdapter{

	@Override
	
	 protected void configure(HttpSecurity http) throws Exception {
		
		http
		.csrf().disable()// disable the csrf tokens due to will use jwt tokens
			.authorizeRequests()
			.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()  // it allows all request with the request have option type.
				.anyRequest().authenticated()
				.and()
			//.formLogin().and()
			.httpBasic();
	}
	
}
