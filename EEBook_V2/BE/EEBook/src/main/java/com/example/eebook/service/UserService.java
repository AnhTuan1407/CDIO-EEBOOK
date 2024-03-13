package com.example.eebook.service;

import com.example.eebook.entity.User;
import com.example.eebook.model.request.ChangePasswordRequest;
import com.example.eebook.model.request.CreateUserRequest;
import com.example.eebook.model.request.UpdateProfileRequest;

public interface UserService {
    
    void register(CreateUserRequest request);


    User getUserByUsername(String username);

    User updateUser(UpdateProfileRequest request);

    void changePassword(ChangePasswordRequest request);

}
