import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponseModel } from 'src/app/core/http-response.model';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(private http: HttpClient) { }

  base_url = 'http://localhost:8000/stripe/'

  createCheckoutSession(product_id: number, quantity: number): Observable<HttpResponseModel> {
    return this.http.post<HttpResponseModel>(`${this.base_url}createCheckoutSession`, { "product_id": product_id, "quantity": quantity })
  }
}