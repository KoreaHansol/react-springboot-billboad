package com.billboard.mapper;

import com.billboard.VO.Community;
import com.billboard.VO.CommunityForm;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface CommunityMapper {
    List<Map<String, Object>> getList();
    Community getDetail(Long id);
    void InsertCommunity(CommunityForm form);
}
