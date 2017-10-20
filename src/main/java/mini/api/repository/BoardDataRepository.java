package mini.api.repository;

import mini.api.vo.BoardDataVO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardDataRepository extends JpaRepository<BoardDataVO, Integer> {

    Page<BoardDataVO> findByBoardId(Integer boardId, Pageable request);
}
