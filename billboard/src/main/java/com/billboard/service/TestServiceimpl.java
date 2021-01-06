package com.billboard.service;

import com.billboard.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TestServiceimpl implements TestService{
    @Autowired
    private TestMapper testMapper;

    @Override
    public List<Map<String, Object>> getList() {
        return testMapper.getList();
    }
}
