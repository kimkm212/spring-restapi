package mini.api.repository;

import mini.api.vo.BoardVO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<BoardVO, Integer> {
}
