import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ProductDataService } from '../shared/product-data.service';

declare var $: any

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute, private pd_service: ProductDataService) { }

  product: any

  async ngOnInit() {
    let product_id: number = 0
    this.route.params.subscribe(params => { product_id = params['id'] })
    this.product = (await lastValueFrom(this.pd_service.getProduct(product_id))).data
  }

  @ViewChild('modal', { read: ElementRef }) private modal!: ElementRef

  ngAfterViewInit() {
    this.route.queryParams.subscribe(params => {
      if (params['purchase'] == 'success') {
        $(this.modal.nativeElement).modal('show')
      }
    }
    );
  }

}
