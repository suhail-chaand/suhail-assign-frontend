import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  code: any
  images: { code: number, image: string }[] = [
    { 'code': 400, 'image': 'assets/images/error/error400.png' },
    { 'code': 404, 'image': 'assets/images/error/error404.png' },
    { 'code': 500, 'image': 'assets/images/error/error500.png' },
  ]

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param['code'] && this.images.find((object) => object.code == param['code'])) {
        this.code = param['code']
      } else {
        this.code = 404
      }
    })
  }

}
