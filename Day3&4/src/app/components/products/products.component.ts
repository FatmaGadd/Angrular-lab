import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
// import { productList } from 'src/app/productlist';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
products:any = [];

constructor(private service:ProductService){}
  ngOnInit(): void {
    // this.service.getAllProducts().subscribe({
    //   next:(data) => {
    //     this.products=data;
    //   }
    // });
    
    // this.service.getAllProducts();
    this.service.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res.status);
        console.log(typeof(res.status));
        this.products=res.body;
      }
    })
  }
  deleteProduct(PId:any){
    if (confirm(`Are you sure to delete product`)) {
      this.service.deleteProduct(PId).subscribe(() => {
        this.products=this.products.filter((p:any) => p.id != PId);
      });
      console.log('deleted');
    }
  }

}
