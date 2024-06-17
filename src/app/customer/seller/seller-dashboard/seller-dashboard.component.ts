import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seller-dashboard.component.html',
  styleUrl: './seller-dashboard.component.css'
})
export class SellerDashboardComponent implements OnInit{

  order_dashboard_data:any;
  total_order:any;
  last_order_date:any;
  prduct_dashboard_data:any;
  total_product:number=0;
  publish_product:number=0;
  inactive_product:number=0;
  draft_product:number=0;



constructor(private customerService:CustomerService,private router:Router){}

ngOnInit(): void {
  //this.sellerOrderDashboard();
  this.sellerProductDashboardData();
  this.sellerOrderDashboardData();
}

sellerProductDashboard(){
  this.router.navigateByUrl("/seller/product");

}

sellerOrderDashboard(){
  alert("this option for only wip candidate");
}

sellerOrderDashboardData(){
  this.customerService.orderdashboardData().subscribe(data=>{
    this.order_dashboard_data=data;
    console.log(this.order_dashboard_data);
    this.total_order= Number(this.order_dashboard_data.length);
    this.last_order_date =this.order_dashboard_data[this.total_order -1].dateTime;
  },error=>{
    console.log("my error data",error);
  })
 
}

sellerProductDashboardData(){
  this.customerService.productDashboardData().subscribe(data=>{
    this.prduct_dashboard_data =data;
    for(status in this.prduct_dashboard_data){
      if(this.prduct_dashboard_data[status].status== 'public'){
        ++this.publish_product;
      }else if(this.prduct_dashboard_data[status].status== 'inactive'){
        ++this.inactive_product;

      }else if(this.prduct_dashboard_data[status].status== 'draft'){
        ++this.draft_product;

      }
      ++this.total_product;
    }
  },error=>{
    console.log("my error ",error);
  })
}

}
