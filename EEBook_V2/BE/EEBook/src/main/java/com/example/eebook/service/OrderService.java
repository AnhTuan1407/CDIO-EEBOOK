package com.example.eebook.service;

import com.example.eebook.entity.Order;
import com.example.eebook.model.request.CreateOrderRequest;

import java.util.List;

public interface OrderService {
    
    void placeOrder(CreateOrderRequest request);

    List<Order> getList();
    
    List<Order> getOrderByUser(String username);
}
