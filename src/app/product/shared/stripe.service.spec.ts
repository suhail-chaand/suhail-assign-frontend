import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StripeService } from './stripe.service';
import { HttpResponseModel } from 'src/app/core/http-response.model';

describe('StripeService', () => {
  let service: StripeService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(StripeService);
    httpController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpController.verify()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve stripe session data', () => {
    const testResponse: HttpResponseModel = {
      status: 200,
      message: 'Stripe checkout session created successfully!',
      data: {},
      error: null
    }

    service.createCheckoutSession(1, 2).subscribe((response) => {
      expect(response).toBe(testResponse)
    })

    const request = httpController.expectOne(`${service.base_url}createCheckoutSession`)

    expect(request.cancelled).toBeFalsy
    expect(request.request.responseType).toBe('json')

    request.flush(testResponse)

  });
});
