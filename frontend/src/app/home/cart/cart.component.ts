import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = []; // {{dish}, numberofservings}
  showCart = false;
  constructor(private cartService: CartService, private service:BackendService){}
  ngOnInit(): void{
    this.cart = this.cartService.getCart();
  }
  createOrder(order: any){
    let total = 0;
    let dishesPlaced = [];
    for(let i=0; i<order.length; i++){
      dishesPlaced.push({
        dishname: order[i].dish.dish,
        servings: order[i].servings
      })
      total += order[i].dish.price * order[i].servings;
    };
    let finalOrder = {
      dishes: dishesPlaced,
      total: total
    };
    return finalOrder;
  }
  placeOrder(){
    this.showCart = true;
    let id = '63f55da13a3e6df039d8abb1';
    let order = this.createOrder(this.cart);
    this.service.addOrder(id, order).subscribe((data)=>{
      console.log(data);
    })
  }
}
