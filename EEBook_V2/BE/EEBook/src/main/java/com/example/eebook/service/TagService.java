package com.example.eebook.service;

import com.example.eebook.entity.Tag;
import com.example.eebook.model.request.CreateTagRequest;

import java.util.List;

public interface TagService {
    
    List<Tag> getListTag();

    Tag createTag(CreateTagRequest request);

    Tag updateTag(long id,CreateTagRequest request);

    void enableTag(long id);

    void deleleTag(long id);

}
