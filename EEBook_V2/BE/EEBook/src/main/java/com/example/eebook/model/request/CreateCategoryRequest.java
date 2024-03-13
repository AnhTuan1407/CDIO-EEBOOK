package com.example.eebook.model.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateCategoryRequest {
    
    @NotNull(message = "Tên danh mục rỗng")
    @NotEmpty(message = "Tên danh mục rỗng")
    @Size(min=5,max=50,message="Độ dài danh mục từ 5-50 ký tự")
    private String name;
}
