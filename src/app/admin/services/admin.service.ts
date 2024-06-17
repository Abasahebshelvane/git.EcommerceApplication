import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public user_url = "http://localhost:3000/user/";
  public product_url = "http://localhost:3000/products/";

  public all_user = "http://localhost:3000/user";

  constructor(private apiservice:ApiService) { }

  userDashboardData(){
    return this.apiservice.get(this.user_url);
  }

 productDashboardData(){
    return this.apiservice.get(this.product_url);
  }

  allUser():Observable<any>{

    return this.apiservice.get(this.all_user);
  }

  addUser(user_dto:any){
    return this.apiservice.post(this.user_url,user_dto);
  }

  //get data of individual user
singleUser(user_id:any){
  return this.apiservice.get(this.user_url+user_id);
}

//update data of  individual user
editUser(user_id:any,user_dto:any):Observable<any>{
return this.apiservice.put(this.user_url+user_id,user_dto);
}

//delet user 

deleteUser(user_id:any){
  return this.apiservice.delete(this.user_url+user_id);
}

}
