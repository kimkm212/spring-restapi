package mini.api.controller;

import mini.api.repository.ContentRepository;
import mini.api.vo.Content;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TestController {

    @Autowired
    private ContentRepository cr;

    @RequestMapping("/list")
    public Page<Content> home() {

        cr.save(new Content("한글이다 ","한글"));


        PageRequest request = new PageRequest(1, 10, Sort.Direction.DESC, "id");

        Page<Content> list = cr.findAll(request);


        return list;
    }
}
