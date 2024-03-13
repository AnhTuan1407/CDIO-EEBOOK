import { Component, OnInit } from '@angular/core';
import { faBars, faHeart, faPhone, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { Order } from 'src/app/_class/order';
import { OrderDetail } from 'src/app/_class/order-detail';

import { CartService } from 'src/app/_service/cart.service';
import { OrderService } from 'src/app/_service/order.service';
import { StorageService } from 'src/app/_service/storage.service';
import {GetDataService} from "../../../_service/get-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [MessageService]

})
export class CheckoutComponent implements OnInit {
  heart = faHeart;
  bag = faShoppingBag;
  phone = faPhone;
  bars = faBars;
  showDepartment = false;
  order = new Order();
  listOrderDetail: any[] =[];
  username !: string;
  totalAmount = 1;
  orderDetail : OrderDetail = new OrderDetail;
  orderInfo: string | undefined;

  orderForm :any ={
    name: null,
    phoneNumber : null,
    email : null,
    country : null,
    city : null,
    district: null,
    ward: null,
    address: null
  }

  constructor(public cartService: CartService,
              private orderService:OrderService,
              private storageService: StorageService,
              private getData: GetDataService,
              private router: Router){

  }
  ngOnInit(): void {
    this.username = this.storageService.getUser().username;
    this.cartService.getItems();
    console.log(this.username);
  }

  showDepartmentClick(){
    this.showDepartment = !this.showDepartment;
  }

  placeOrder(){
    this.cartService.items.forEach(res =>{
      let orderDetail : OrderDetail = new OrderDetail;
      orderDetail.name = res.name;
      orderDetail.price = res.price;
      orderDetail.quantity = res.quantity;
      orderDetail.subTotal = res.subTotal;
      this.listOrderDetail.push(orderDetail);
    })
    const vnpayRadio = document.getElementById('VNPay') as HTMLInputElement;
    if (vnpayRadio.checked) {
      this.router.navigate(['/vnpay']);
    } else {

    }

    this.generateRandomNumberInfo()
    const {name,phoneNumber,email,country,city,district,ward,address} = this.orderForm;
    this.orderService.placeOrder(name,phoneNumber,email,country, city,district,ward,address,this.orderInfo,this.listOrderDetail,this.username).subscribe({
      next: res =>{
        this.cartService.clearCart();
      },error: err=>{
        console.log(err);
      }
    })

  }


  generateRandomNumberInfo() {
    const length = 9;
    let result = 'Thanh toan cho đon hang ';
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      result += randomNumber.toString();
    }
    this.orderInfo = result;
  }

}
