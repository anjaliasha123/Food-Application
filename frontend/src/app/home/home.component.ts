import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  ingredient = "";
  dishes=[
    {
      "id": 1,
      "dish": "Tikka Masala",
      "ingredients": [
        "olive oil",
        "chicken",
        "onion",
        "cloves garlic",
        "ginger",
        "jalapeno",
        "turmeric",
        "cumin",
        "paprika",
        "masala",
        "cayenne pepper",
        "tomatoes",
        "heavy cream",
        "Kosher salt",
        "cilantro",
        "rice",
        "naan"
      ],
      "price": 5,
      "pic": "assets/pics/tikka-masala.png"
    },
    {
      "id": 2,
      "dish": "Truffled Pizza",
      "ingredients": [
        "dough",
        "shiitake mushroom",
        "cremini mushrooms",
        "portobello mushrooms",
        "fontina cheese",
        "thyme",
        "truffle oil",
        "parmesan cheese"
      ],
      "price": 15,
      "pic": "assets/pics/truffled-pizza.png"
    },
    {
      "id": 3,
      "dish": "Mujadara",
      "ingredients": [
        "olive oil",
        "onion",
        "rice",
        "garlic",
        "lentils",
        "cumin",
        "salt"
      ],
      "price": 10,
      "pic": "assets/pics/mujadara.png"
    },
    {
      "id": 4,
      "dish": "Meat Lover Burger",
      "ingredients": [
        "bun",
        "onion",
        "ground beef",
        "special sauce",
        "bacon"
      ],
      "price": 6,
      "pic": "assets/pics/meat-burger.png"
    }];
  recipeName = 'Biriyani';
  dishId = 3;
  total: any;
  constructor(){

  }
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    // alert('Hello')
  }
  receiveSum(sum: any){
this.total = sum;
console.log('Total value from child is: ', this.total)
  }
}
