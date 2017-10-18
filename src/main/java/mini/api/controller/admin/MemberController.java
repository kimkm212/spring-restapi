package mini.api.controller.admin;

import mini.abstracts.MiniAbstractController;
import mini.api.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member")
public class MemberController extends MiniAbstractController{

    @Autowired
    MemberRepository memberRepository;



}
