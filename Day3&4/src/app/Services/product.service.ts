import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  // baseURl:string = "http://localhost:3005/products";
  baseURl:string = "https://localhost:44378/api/products";//using db and real apis
  private options = {
    observe: 'response' as const,
    headers: new HttpHeaders()
        .set("Content-Type", "application/json")
        
};
  
  getAllProducts(){
    // return this.httpClient.get(this.baseURl);
    
    // this.httpClient.get(this.baseURl,this.options).subscribe(res => console.log(res));//res is HTTPResponse
    return this.httpClient.get(this.baseURl,this.options);
  }
  getProductById(productId:any){
    return this.httpClient.get(`${this.baseURl}/${productId}`);
  }
  addProduct(product:any){
    return this.httpClient.post(this.baseURl,product);
  }
  editProduct(productId:any,product:any){
    return this.httpClient.put(`${this.baseURl}/${productId}`,product);
  }
  deleteProduct(productId:any){
    return this.httpClient.delete(`${this.baseURl}/${productId}`);
  }

}
