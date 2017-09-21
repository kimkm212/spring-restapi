package mini.api.repository;

import mini.api.vo.PostVO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<PostVO, Integer> {

}