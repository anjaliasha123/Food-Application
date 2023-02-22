import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit{

  servings = 0;
  color="purple";
  cardColor="grey";
  // dish: any;
  @Input() parentDish: any;  
  @Output() sumEvent = new EventEmitter();
  
  constructor(private cartService: CartService){}
  ngOnInit(): void {
    
  }
  addToCart = (value: any)=>{
    let item = {
      dish: this.parentDish,
      servings: this.servings
    }
    this.cartService.sendToCart(item);
  }
  

}
