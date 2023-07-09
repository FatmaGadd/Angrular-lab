import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/details/details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { authGaurd } from './gaurds/auth.guard';

const routs:Routes=[
  {
    path:'products',
    canActivate:[authGaurd],
    children:[
      {path:'',component:ProductsComponent},
      {path:'details/:id',component:DetailsComponent},
      {path:'addProduct/:id',component:AddProductComponent}
    ]
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    DetailsComponent,

  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routs)
  ]
})
export class ProductModule { }

