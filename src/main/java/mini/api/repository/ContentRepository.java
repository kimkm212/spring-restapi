package mini.api.repository;

import mini.api.vo.ContentVO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContentRepository extends JpaRepository<ContentVO, Long> {

}