package mini.api.controller.admin;

import mini.abstracts.MiniAbstractController;
import mini.api.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class CategoryController extends MiniAbstractController{


    @Autowired
    private CategoryRepository categoryRepository;

    @RequestMapping("/aa")
    public void aa () throws Exception {
        log.info("컨트롤러 탐");
    }
}
