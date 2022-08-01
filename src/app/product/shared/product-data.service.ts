import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponseModel } from 'src/app/core/http-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  base_url = 'http://localhost:8000/product/'

  getProduct(id: number): Observable<HttpResponseModel> {
    return this.http.get<HttpResponseModel>(`${this.base_url}getProduct/${id}/`)
  }
}
