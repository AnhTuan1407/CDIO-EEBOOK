package com.example.eebook.service;

import com.example.eebook.entity.Blog;
import com.example.eebook.model.request.CreateBlogRequest;

import java.util.List;

public interface BlogService {
    
    List<Blog> getList();

    List<Blog> getListNewest(int limit);

    Blog getBlog(long id);

    Blog createBlog(CreateBlogRequest request);

    Blog updateBlog(long id,CreateBlogRequest request);

    void deleteBlog(long id);

}
