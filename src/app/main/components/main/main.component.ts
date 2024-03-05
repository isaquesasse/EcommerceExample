import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../../../../../node_modules/keen-slider/keen-slider.min.css', './main.component.scss'],
})
export class MainComponent {

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 3,
    items: 1,
    animateIn: 'flipInX',
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    responsive: {
      720: {
        items: 2,
        dots: false,
      },
      900: {
        items: 5,
        dots: false,
      }
    }
  }
}
