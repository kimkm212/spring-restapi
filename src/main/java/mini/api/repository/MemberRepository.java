package mini.api.repository;

import mini.api.vo.MemberVO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<MemberVO,Integer> {
}
