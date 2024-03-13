package com.example.eebook.service;

import com.example.eebook.entity.Category;
import com.example.eebook.model.request.CreateCategoryRequest;

import java.util.List;

public interface CategoryService {
    List<Category> findAll();

    List<Category> getListEnabled();

    Category createCategory(CreateCategoryRequest request);

    Category updateCategory(long id,CreateCategoryRequest request);

    void enableCategory(long id);

    void deleteCategory(long id);
}
