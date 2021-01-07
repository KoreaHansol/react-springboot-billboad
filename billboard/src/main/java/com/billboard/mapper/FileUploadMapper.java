package com.billboard.mapper;

import com.billboard.VO.File;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface FileUploadMapper {
    void FileUpload(File file);
}
