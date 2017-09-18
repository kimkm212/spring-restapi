package mini.api.controller;

import mini.api.repository.ContentRepository;
import mini.api.vo.Content;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/content")
public class ContentController {

    @Autowired
    private ContentRepository cr;


    @GetMapping(value = "/list/{page}")
    public Page<Content> list(@PathVariable int page) {
        //cr.save(new Content("한글이다 ","한글"));
        PageRequest request = new PageRequest(page - 1, 10, Sort.Direction.DESC, "id");
        Page<Content> list = cr.findAll(request);
        return list;
    }


    @PostMapping(value = "/")
    public Content write(Content ct) {
        return cr.save(ct);
    }


    @GetMapping(value = "/{id}")
    public Content view(@PathVariable int id) {
        return cr.findOne(id);
    }


    @PutMapping(value = "/{id}")
    public Content update(@PathVariable int id, Content ct) {
        ct.setId(id);
        return cr.save(ct);
    }


    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable int id) {
        cr.delete(id);
    }


}
