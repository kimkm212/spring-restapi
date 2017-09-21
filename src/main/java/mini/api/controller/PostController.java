package mini.api.controller;

import mini.abstracts.MiniAbstractController;
import mini.api.repository.PostRepository;
import mini.api.vo.PostVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/content", produces = "application/json")
public class PostController extends MiniAbstractController{

    @Autowired
    private PostRepository cr;


    @GetMapping(value = "/list/{page}")
    public Page<PostVO> list(@PathVariable int page) {

        PageRequest request = new PageRequest(page - 1, 10, Sort.Direction.DESC, "id");
        Page<PostVO> list = cr.findAll(request);
        return list;
    }


    @PostMapping(value = "/")
    public PostVO write(PostVO ct) {
        return cr.save(ct);
    }


    @GetMapping(value = "/{id}")
    public PostVO view(@PathVariable int id) {
        return cr.findOne(id);
    }


    @PutMapping(value = "/{id}")
    public PostVO update(@PathVariable int id, PostVO ct) {
        ct.setPostId(id);
        return cr.save(ct);
    }


    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable int id) {
        cr.delete(id);
    }


}
