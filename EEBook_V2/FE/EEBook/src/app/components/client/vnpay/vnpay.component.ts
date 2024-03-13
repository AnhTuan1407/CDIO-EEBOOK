import {Component, OnInit} from '@angular/core';
import {VnpayService} from "../../../_service/vnpay.service";
import {OrderService} from "../../../_service/order.service";
import {GetDataService} from "../../../_service/get-data.service";
import {CartService} from "../../../_service/cart.service";


@Component({
  selector: 'app-vnpay',
  templateUrl: './vnpay.component.html',
  styleUrls: ['./vnpay.component.css']
})
export class VNPayComponent implements OnInit {
  orderTotal: number | undefined;
  orderInfo: string | undefined;
  numberCode: string = '';
  listOrder : any;

  // formattedOrderTotal: string | undefined;
  constructor(private vnpayService: VnpayService,
              private cartService: CartService,
              private orderService: OrderService) {

  }

  ngOnInit() {
    console.log(this.cartService.total)
    this.orderTotal = this.cartService.total;
    this.generateRandomNumberCode();
    this.getOrderInfo()
  }

  // The function redirects to the payment execution page
  submitOrder() {
    console.log('before' + this.cartService.total);
    this.vnpayService.submitOrder(this.orderTotal, this.orderInfo).subscribe(
      (response) => {
        if (response && response.vnpayUrl) {
          window.location.href = response.vnpayUrl;
        } else {
        }
      },
      (error) => {
      }
    );
  }

  private formatCurrency(num: number): string {
    return num.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
  }

  generateRandomNumberCode() {
    const length = 15; // Độ dài của chuỗi số
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      result += randomNumber.toString();
    }
    this.numberCode = result;
  }

  getOrderInfo() {
    this.orderService.getLastOrderInfo().subscribe({
      next: res => {
        this.orderInfo = res.orderInfo;
          console.log('o' + res);
        console.log('r' + this.orderInfo);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  // generateRandomNumberInfo() {
  //   const length = 9;
  //   let result = 'Thanh toan cho đon hang ';
  //   for (let i = 0; i < length; i++) {
  //     const randomNumber = Math.floor(Math.random() * 10);
  //     result += randomNumber.toString();
  //   }
  //   this.orderInfo = result;
  // }


}
