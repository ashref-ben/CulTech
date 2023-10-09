package com.example.Blog.services;

import com.example.Blog.dtos.BlogRequest;
import com.example.Blog.dtos.BlogResponse;
import com.example.Blog.model.Blog;
import com.example.Blog.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;


@Service
@RequiredArgsConstructor
@Slf4j
public class Blogservice {
    private final BlogRepository blogRepository;
    public List<BlogResponse> getAll() {
        List<Blog> blogs=blogRepository.findAll();
        return  blogs.stream().map(this::mapToBlogResponse).toList();
    }

    private BlogResponse mapToBlogResponse(Blog object) {
        return BlogResponse.builder()
                .id(object.getId())
                .description(object.getDescription())
                .Title(object.getTitle())
                .date(object.getDate())
                .hashtags(object.getHashtags())
                .pictures(object.getPictures())
                .address(object.getAddress())
                .country(object.getCountry())
                .build();
    }

    public void create(BlogRequest blogRequest) {
        Blog blog= Blog.builder()
                .pictures(blogRequest.getPictures())
                .Title(blogRequest.getTitle())
                .description(blogRequest.getDescription())
                .hashtags(blogRequest.getHashtags())
                .country(blogRequest.getCountry())
                .address(blogRequest.getAddress())
                .build();
        blog.setDate(new Date());
        blogRepository.save(blog);
        log.info("Object Added ");
    }
    public void delete(Integer blogId) {
        Optional<Blog> optionalBlog = blogRepository.findById(blogId);

        if (optionalBlog.isPresent()) {
            blogRepository.deleteById(blogId);
            log.info("Blog with ID {} deleted", blogId);
        } else {
            throw new NoSuchElementException ( "Blog not found with ID " + blogId);
        }
    }

    public void update(Integer blogId, BlogRequest blogRequest) {
        Optional<Blog> optionalBlog = blogRepository.findById(blogId);

        if (optionalBlog.isPresent()) {
            Blog existingBlog = optionalBlog.get();
            existingBlog.setTitle(blogRequest.getTitle());
            existingBlog.setDescription(blogRequest.getDescription());
            existingBlog.setHashtags(blogRequest.getHashtags());
            existingBlog.setPictures(blogRequest.getPictures());
            existingBlog.setAddress(blogRequest.getAddress());
            existingBlog.setCountry(blogRequest.getCountry());
            // Optionally, update the date if needed: existingBlog.setDate(new Date());

            blogRepository.save(existingBlog);
            log.info("Blog with ID {} updated", blogId);
        } else {
            throw new NoSuchElementException("Blog not found with ID " + blogId);
        }
    }

}
