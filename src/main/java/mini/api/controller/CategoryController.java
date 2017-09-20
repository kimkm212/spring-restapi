package mini.api.controller;

import mini.abstracts.MiniAbstractController;
import mini.api.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController extends MiniAbstractController{


    @Autowired
    private CategoryRepository categoryRepository;
}
