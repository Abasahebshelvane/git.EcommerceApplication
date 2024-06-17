import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-buyer-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buyer-dashboard.component.html',
  styleUrl: './buyer-dashboard.component.css'
})
export class BuyerDashboardComponent implements OnInit {
all_Products:any;
show_checkout:boolean=false;

  constructor(private router:Router,private customerService:CustomerService){}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.customerService.allProduct().subscribe(data=>{
      this.all_Products =data;

    },error=>{
      console.log("my error",error);
    })
  }

  buyProduct(id:number){
    this.show_checkout =true;
    this.customerService.quickByProduct(id);
    this.router.navigateByUrl('/checkout');
  }
  addToCart(){
    alert("This is showcase");
  }
  
}
