import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-page-prevencao',
  templateUrl: './page-prevencao.component.html',
  styleUrls: ['./page-prevencao.component.css'],
})
export class PagePrevencaoComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
}
