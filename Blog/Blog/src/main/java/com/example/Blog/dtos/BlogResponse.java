package com.example.Blog.dtos;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import lombok.*;

import java.util.Date;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlogResponse {
    private Integer id;
    private String Title;
    private Date date;
    private String description;
    private Byte[] pictures;
    private String country;
    private String address;
    private List<String> hashtags;
}
