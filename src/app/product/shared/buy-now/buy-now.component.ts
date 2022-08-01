import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})
export class BuyNowComponent implements OnInit {

  constructor() { }

  @Input() product: any
  quantity: number = 1

  ngOnInit(): void {
  }

  checkout() {
    console.log(this.product.price)
    console.log(this.quantity)
  }

}
