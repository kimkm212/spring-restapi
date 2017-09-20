package mini.api.repository;

import mini.api.vo.CategoryVO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryVO, Integer> {
}
