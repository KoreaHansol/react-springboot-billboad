package com.billboard.controller;

import com.billboard.VO.Community;
import com.billboard.VO.File;
import com.billboard.VO.CommunityForm;
import com.billboard.service.CommunityService;
import com.billboard.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Controller
public class CommunityController {
    public static Integer key;
    @Autowired
    private CommunityService communityService;

    @Autowired
    private FileService fileService;

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
    public Integer  InsertCommunity(@RequestBody CommunityForm form) {
        communityService.InsertCommunity(form);
        key = form.getId();
        return form.getId();
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


    @RequestMapping("/Community/fileUpload")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public String upload(@RequestPart MultipartFile file) throws Exception {
            String originalfileName = file.getOriginalFilename();

            java.io.File dest = new java.io.File("C:/Image/" + originalfileName);
            file.transferTo(dest);

        File f = new File();
        f.setFileName("C:/Image/" + originalfileName);
        f.setSize(file.getSize());
        f.setBoardID(key);

        System.out.println(f);
        fileService.FileUpload(f);

        return originalfileName;
    }

}
