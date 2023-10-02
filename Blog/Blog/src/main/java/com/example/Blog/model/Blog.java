package com.example.Blog.model;
import jakarta.persistence.*;

import lombok.*;

import java.util.Date;
import java.util.List;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String Title;
    private Date date;
    private String description;
    private String country;
    private String address;
    @Lob
    @Column(length = 1048576)
    private Byte[] pictures;
    @ElementCollection
    @CollectionTable(name = "blog_hashtags")
    private List<String> hashtags;
    /*
    @ManyToOne
    @JoinColumn(name = "user_id")
    private ApplicationUser user;
    */
}
