package mini.config;

import mini.config.interceptor.AdminInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfig  {

    @Autowired
    AdminInterceptor adminInterceptor;

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");;
            }

 /*           @Override
            public void addInterceptors(InterceptorRegistry registry) {
                registry.addInterceptor(adminInterceptor)
                        .addPathPatterns("/admin/**")
                        .excludePathPatterns("/public/**");
            }*/

        };
    }


}
