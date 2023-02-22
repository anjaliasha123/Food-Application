import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: any[] = [];
  constructor() { }

  getCart(){
    return this.cart;
  }
  sendToCart(item: any){
    this.cart.push(item);
  }
}
 