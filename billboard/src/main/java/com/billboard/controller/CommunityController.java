package com.billboard.controller;

import com.billboard.VO.Community;
import com.billboard.VO.CommunityForm;
import com.billboard.service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
public class CommunityController {

    @Autowired
    private CommunityService communityService;

    //community getList
    @RequestMapping(value = "/Community", method = RequestMethod.GET)
    @ResponseBody
    public List<Map<String, Object>> getList() {
        return communityService.getList();
    }

    //community detail provider
    @RequestMapping(value = "/Community/detail/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Community getDetail(@PathVariable("id") Long id) {
        return communityService.getDetail(id);
    }

    @RequestMapping(value = "/Community/write", method = RequestMethod.POST)
    @ResponseBody
    public void  InsertCommunity(@RequestBody CommunityForm form) {
        communityService.InsertCommunity(form);
    }
}
