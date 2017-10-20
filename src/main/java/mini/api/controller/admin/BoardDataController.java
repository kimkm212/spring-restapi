package mini.api.controller.admin;

import mini.abstracts.MiniAbstractController;
import mini.api.repository.BoardDataRepository;
import mini.api.vo.BoardDataVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/boardData/{boardId}")
public class BoardDataController extends MiniAbstractController{

    @Autowired
    private BoardDataRepository boardDataRepository;


    @GetMapping(value = "/list/{page}")
    public Page<BoardDataVO> list(@PathVariable int page, @PathVariable int boardId) {

        PageRequest request = new PageRequest(page - 1, 10, Sort.Direction.DESC, "dataId");
        Page<BoardDataVO> list = boardDataRepository.findByBoardId(boardId,request);
        return list;
    }

    @GetMapping(value = "/{id}")
    public BoardDataVO view(@PathVariable int id) {
        return boardDataRepository.findOne(id);
    }

    @PostMapping(value = "")
    public BoardDataVO write(@RequestBody BoardDataVO ct, @PathVariable int boardId) {

        return boardDataRepository.save(ct);
    }


    @PutMapping(value = "")
    public BoardDataVO update(@RequestBody BoardDataVO ct, @PathVariable int boardId) {
        return boardDataRepository.save(ct);
    }


    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable int id) {
        boardDataRepository.delete(id);
    }

}
