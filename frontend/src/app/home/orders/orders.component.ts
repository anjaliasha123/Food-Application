import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  orders = [];
  constructor(private service:BackendService){}
  ngOnInit(): void {
    this.service.getOrder('63f55da13a3e6df039d8abb1').subscribe((data)=>{
      this.orders = data
    });
  }

}
