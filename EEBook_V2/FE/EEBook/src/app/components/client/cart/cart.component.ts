import { Component } from '@angular/core';
import { faBars, faHeart, faPhone, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  heart = faHeart;
  bag = faShoppingBag;
  phone = faPhone;
  bars = faBars;

  showDepartment = false;
  selectedItems: any[] = [];


  constructor(public cartService: CartService){

  }

  showDepartmentClick(){
    this.showDepartment = !this.showDepartment;
  }


  removeFromCart(item:any){
    this.cartService.remove(item);
  }

  updateQuantity(item: any,event: any){
    let quantity : number = event.target.value;
    this.cartService.updateCart(item,quantity);
  }

  plusQuantity(item:any){
    let quantity = Number(item.quantity);
    this.cartService.updateCart(item,quantity+=1);
  }
  subtractQuantity(item: any){
    if(item.quantity > 1){
      let quantity = Number(item.quantity);
      this.cartService.updateCart(item,quantity-=1);
    }
  }
  selectAll() {
    this.selectedItems = this.cartService.items.slice();
  }
  isSelected(product: any) {
    return this.selectedItems.indexOf(product) > -1;
  }
  toggleSelect(product: any) {
    const index = this.selectedItems.indexOf(product);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(product);
    }
  }




}
