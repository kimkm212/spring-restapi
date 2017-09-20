package mini.api.controller;

import mini.abstracts.MiniAbstractController;
import mini.api.repository.ContentRepository;
import mini.api.vo.ContentVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/content")
public class ContentController extends MiniAbstractController{

    @Autowired
    private ContentRepository cr;


    @GetMapping(value = "/list/{page}")
    public Page<ContentVO> list(@PathVariable int page) {

        PageRequest request = new PageRequest(page - 1, 10, Sort.Direction.DESC, "id");
        Page<ContentVO> list = cr.findAll(request);
        return list;
    }


    @PostMapping(value = "/")
    public ContentVO write(ContentVO ct) {
        return cr.save(ct);
    }


    @GetMapping(value = "/{id}")
    public ContentVO view(@PathVariable int id) {
        return cr.findOne(id);
    }


    @PutMapping(value = "/{id}")
    public ContentVO update(@PathVariable int id, ContentVO ct) {
        ct.setId(id);
        return cr.save(ct);
    }


    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable int id) {
        cr.delete(id);
    }


}
