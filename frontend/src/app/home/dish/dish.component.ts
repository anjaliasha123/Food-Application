import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  input = "helo compo";
  ngOnInit(): void {
    
  }
  buttonClick = (value: any)=>{
    let sum = value * this.parentDish.price;
    console.log('This is value from child: ',sum);
    this.sumEvent.emit(sum);
  }
  

}
