import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductDataService } from './product-data.service';
import { HttpResponseModel } from 'src/app/core/http-response.model';
import { HttpErrorResponse } from '@angular/common/http';

describe('ProductDataService', () => {
  let service: ProductDataService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductDataService);
    httpController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpController.verify()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a product data', () => {
    const testResponse: HttpResponseModel = {
      status: 200,
      message: 'Product fetched successfully!',
      data: {},
      error: null
    }

    service.getProduct(1).subscribe((response) => {
      expect(response).toBe(testResponse)
    })

    const request = httpController.expectOne(`${service.base_url}getProduct/1/`)

    expect(request.cancelled).toBeFalsy
    expect(request.request.responseType).toBe('json')

    request.flush(testResponse)

  });

  it('should return 404 error if product not found', () => {
    const errorResposne: HttpResponseModel = {
      status: 404,
      message: 'Product does not exist!',
      data: null,
      error: null
    }

    service.getProduct(2).subscribe({
      next: (response: HttpResponseModel) => { },
      error: (error: HttpErrorResponse) => {
        expect(error.error).toBe(errorResposne)
      }
    })

    const request = httpController.expectOne(`${service.base_url}getProduct/2/`)

    expect(request.cancelled).toBeFalsy
    expect(request.request.responseType).toBe('json')

    request.flush(errorResposne)
  })

});
