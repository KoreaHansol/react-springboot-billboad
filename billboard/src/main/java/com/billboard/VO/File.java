package com.billboard.VO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
@Setter
@Getter
public class File {
    private int id;
    private Integer boardID;
    private String fileName;
    private long size;
    private String mimeType;
    private Date insertDate;
}
