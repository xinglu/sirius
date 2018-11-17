package com.hly.sirius.controller;

import com.hly.sirius.domain.Article;
import com.hly.sirius.service.ArticleService;
import com.hly.sirius.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

/**
 * @author :hly
 * @github :https://github.com/huangliangyun
 * @blog :blog.csdn.net/Sirius_hly
 * @date :2018/11/16
 */
@Controller
public class AdminController {

    @Autowired
    ArticleService articleService;

    @RequestMapping("/admin")
    public String admin(){
        return "/admin/admin";
    }



}