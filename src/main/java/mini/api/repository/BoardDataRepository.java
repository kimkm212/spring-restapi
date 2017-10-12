package mini.api.repository;

import mini.api.vo.BoardDataVO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardDataRepository extends JpaRepository<BoardDataVO, Integer> {
}
