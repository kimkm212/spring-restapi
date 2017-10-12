package mini.api.controller.admin;

import mini.abstracts.MiniAbstractController;
import mini.api.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class AdminMainController extends MiniAbstractController{

    @RequestMapping("/admin/**")
    public String aa () throws Exception {

        log.info("어드만");
        return "index";
    }
}
