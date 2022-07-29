import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ProductDataService } from '../shared/product-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pd_service: ProductDataService) { }

  product: any

  async ngOnInit() {
    let product_id: number = 0
    this.route.params.subscribe(params => { product_id = params['id'] })
    this.product = (await lastValueFrom(this.pd_service.getProduct(product_id))).data
  }

}
