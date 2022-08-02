import { Component, Input, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

import { StripeService } from '../stripe.service';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})
export class BuyNowComponent implements OnInit {

  constructor(private stripe: StripeService) { }

  @Input() product: any
  quantity: number = 1

  ngOnInit(): void {
  }

  checkout() {
    this.stripe.createCheckoutSession(this.product.id, this.quantity).subscribe(async (response) => {
      const stripe = await loadStripe(response.data.publishable_key)
      stripe!.redirectToCheckout({ sessionId: response.data.session_id })
    })
  }

}

