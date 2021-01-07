package com.billboard.service;


import com.billboard.VO.File;
import com.billboard.mapper.FileUploadMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FileServiceImpl implements FileService {
    @Autowired
    private FileUploadMapper fileUploadMapper;

    @Override
    public void FileUpload(File file) {
        fileUploadMapper.FileUpload(file);
    }
}
