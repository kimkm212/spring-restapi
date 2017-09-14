package mini.api.controller;

import mini.api.repository.ContentRepository;
import mini.api.vo.Content;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @Autowired
    private ContentRepository cr;

    @RequestMapping("/")
    public Content home() {

        Content ct = cr.save(new Content("한글이다 ","한글"));


        return ct;
    }
}
