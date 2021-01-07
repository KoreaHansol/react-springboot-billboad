package com.billboard.service;

import com.billboard.VO.Community;
import com.billboard.VO.CommunityForm;

import java.util.List;
import java.util.Map;

public interface CommunityService {
    List<Map<String, Object>> getList();
    Community getDetail(Long id);
    void InsertCommunity(CommunityForm form);
    void UltCommunity(Community form);
    void deleteCommunity(Long id);
}
