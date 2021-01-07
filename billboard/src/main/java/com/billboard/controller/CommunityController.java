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
    public String  InsertCommunity(@RequestBody CommunityForm form) {
        communityService.InsertCommunity(form);
        return "추가 완료";
    }


    @RequestMapping(value = "/Community/ult", method = RequestMethod.POST)
    @ResponseBody
    public String  UltCommunity(@RequestBody Community form) {
        communityService.UltCommunity(form);
        return "수정 완료";
    }

    @RequestMapping(value = "/Community/delete", method = RequestMethod.POST)
    @ResponseBody
    public String  deleteCommunity(@RequestBody Community form) {
        communityService.deleteCommunity(form.getId());
        return "삭제 완료";
    }
}
