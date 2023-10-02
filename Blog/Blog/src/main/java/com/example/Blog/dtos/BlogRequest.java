package com.example.Blog.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlogRequest {
    private Integer id;
    private String Title;
    private String description;
    private Byte[] pictures;
    private List<String> hashtags;
    private String country;
    private String address;
}