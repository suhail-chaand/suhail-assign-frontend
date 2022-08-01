import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductImagesComponent } from './shared/product-images/product-images.component';
import { BuyNowComponent } from './shared/buy-now/buy-now.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductImagesComponent,
    BuyNowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ProductDetailsComponent,
  ]
})
export class ProductModule { }
