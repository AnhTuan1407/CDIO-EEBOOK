package com.example.eebook.controller;

import com.example.eebook.entity.Blog;
import com.example.eebook.model.request.CreateBlogRequest;
import com.example.eebook.model.response.MessageResponse;
import com.example.eebook.service.BlogService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blog")
@CrossOrigin(origins = "*",maxAge = 3600)
public class BlogController {

    @Autowired
    private BlogService blogService;

    @GetMapping("/")
    @Operation(summary="Lấy tất cả danh sách blog")
    public ResponseEntity<List<Blog>> getList(){
        List<Blog> list = blogService.getList();

        return ResponseEntity.ok(list);

    }

    @GetMapping("/{id}")
    @Operation(summary="Lấy ra blog bằng ID")
    public ResponseEntity<Blog> getBlog(@PathVariable long id){
        
        Blog blog =blogService.getBlog(id);
        return ResponseEntity.ok(blog);

    }

    @GetMapping("/newest")
    @Operation(summary="Lấy ra danh sách blog mới nhất với số lượng = limit")
    public ResponseEntity<List<Blog>> getListNewest(@RequestParam int limit){
        List<Blog> list = blogService.getListNewest(limit);
        return ResponseEntity.ok(list);
    }


    @PostMapping("/create")
    @Operation(summary="Tạo mới blog")
    public ResponseEntity<Blog> create(@RequestBody CreateBlogRequest request){

        Blog blog = blogService.createBlog(request);

        return ResponseEntity.ok(blog);

    }

    @PutMapping("/update/{id}")
    @Operation(summary="Tìm blog bằng id và cập nhật blog đó")
    public ResponseEntity<Blog> update(@PathVariable long id, @RequestBody CreateBlogRequest request){

        Blog blog = blogService.updateBlog(id, request);

        return ResponseEntity.ok(blog);

    }

    @DeleteMapping("/delete/{id}")
    @Operation(summary="Xóa blog bằng Id")
    public ResponseEntity<?> delete(@PathVariable long id){
        blogService.deleteBlog(id);
        return ResponseEntity.ok(new MessageResponse("Delete success"));
    }
    
}
