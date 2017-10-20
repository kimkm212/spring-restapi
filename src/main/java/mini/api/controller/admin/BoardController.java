package mini.api.controller.admin;

import mini.abstracts.MiniAbstractController;
import mini.api.repository.BoardRepository;
import mini.api.vo.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/board")
public class BoardController extends MiniAbstractController {

    @Autowired
    private BoardRepository boardRepository;

    @GetMapping("/list/{page}")
    public Page<BoardVO> list(@PathVariable int page) {
        PageRequest request = new PageRequest(page - 1, 10, Sort.Direction.DESC, "boardId");
        Page<BoardVO> list = boardRepository.findAll(request);

        return list;
    }

    @GetMapping("/{id}")
    public BoardVO view(@PathVariable int id) {
        return boardRepository.findOne(id);
    }

    @PostMapping("")
    public BoardVO write(@RequestBody BoardVO vo) {
        return boardRepository.save(vo);
    }

    @PutMapping("")
    public BoardVO update (@RequestBody BoardVO vo) {
        return boardRepository.save(vo);
    }

    @DeleteMapping("/{id}")
    public void delete (@PathVariable int id) {
        boardRepository.delete(id);
    }

}
