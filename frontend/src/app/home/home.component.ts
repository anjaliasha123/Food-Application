import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  ingredient = "";
  dishes: any[] = [];
  // dishes = [
  //   {
  //     "id": 1,
  //     "dish": "Tikka Masala",
  //     "ingredients": [
  //       "olive oil",
  //       "chicken",
  //       "onion",
  //       "cloves garlic",
  //       "ginger",
  //       "jalapeno",
  //       "turmeric",
  //       "cumin",
  //       "paprika",
  //       "masala",
  //       "cayenne pepper",
  //       "tomatoes",
  //       "heavy cream",
  //       "Kosher salt",
  //       "cilantro",
  //       "rice",
  //       "naan"
  //     ],
  //     "price": 5,
  //     "pic": "assets/pics/tikka-masala.png"
  //   },
  //   {
  //     "id": 2,
  //     "dish": "Truffled Pizza",
  //     "ingredients": [
  //       "dough",
  //       "shiitake mushroom",
  //       "cremini mushrooms",
  //       "portobello mushrooms",
  //       "fontina cheese",
  //       "thyme",
  //       "truffle oil",
  //       "parmesan cheese"
  //     ],
  //     "price": 15,
  //     "pic": "assets/pics/truffled-pizza.png"
  //   },
  //   {
  //     "id": 3,
  //     "dish": "Mujadara",
  //     "ingredients": [
  //       "olive oil",
  //       "onion",
  //       "rice",
  //       "garlic",
  //       "lentils",
  //       "cumin",
  //       "salt"
  //     ],
  //     "price": 10,
  //     "pic": "assets/pics/mujadara.png"
  //   },
  //   {
  //     "id": 4,
  //     "dish": "Meat Lover Burger",
  //     "ingredients": [
  //       "bun",
  //       "onion",
  //       "ground beef",
  //       "special sauce",
  //       "bacon"
  //     ],
  //     "price": 6,
  //     "pic": "assets/pics/meat-burger.png"
  //   }];
  recipeName = 'Biriyani';
  dishId = 3;
  total: any;
  showCart = false;
  constructor(private backendService:BackendService) {

  }
  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    // alert('Hello')
    this.backendService.getDishes().subscribe(data=>this.dishes=data);
  }
  receiveSum(sum: any) {
    this.total = sum;
    console.log('Total value from child is: ', this.total)
  }

  goToCart(){
    this.showCart = !this.showCart;
  }
}
