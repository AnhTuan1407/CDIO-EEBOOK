import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../_class/order';
import { OrderDetail } from '../_class/order-detail';

const ORDER_API = "http://localhost:8080/api/order/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }


  getListOrder():Observable<any>{
    return this.http.get(ORDER_API,httpOptions);
  }


  getListOrderByUser(username: string):Observable<any>{
    let params = new HttpParams();
    params = params.append('username',username);
    return this.http.get(ORDER_API + 'user',{params: params});

  }

  placeOrder(name: string, phoneNumber: string, email: string, country: string, city: string, district: string, ward: string, address: string, orderInfo: string | undefined, orderDetails: OrderDetail[], username: string):Observable<any>{
    return this.http.post(ORDER_API +'create',{name,phoneNumber,email,country,city,district,ward,address,orderInfo,orderDetails,username},httpOptions);
  }

    getLastOrderInfo():Observable<any>{
      return this.http.get(ORDER_API+'info',httpOptions);
    }
}
