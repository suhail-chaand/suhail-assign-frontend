import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() images: any

  ngOnInit(): void {
  }

  @ViewChild('carousel') private carousel!: ElementRef

  ngAfterViewInit() {
    $(this.carousel.nativeElement).carousel();
  }

}
