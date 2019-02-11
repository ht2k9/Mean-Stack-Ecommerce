import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('Carousel', [
      transition('show <=> hide', animate(('3s'), keyframes([
        style({ opacity: 0 }),
        style({ opacity: 1 })
      ])))
    ])
  ]
})
export class HomeComponent implements OnInit {
  showSearch = false;

  imageState = 'show';
  currentIndex = 0;
  images = [   
    'https://cloudfront.joigifts.com/content/images/thumbs/0012662.jpeg',
    'https://cloudfront.joigifts.com/content/images/thumbs/0016865.jpeg',
    'https://cloudfront.joigifts.com/content/images/thumbs/0018754.jpeg'
  ]; 
  constructor() { }

  ngOnInit() {
    interval(5000).subscribe( val => {
      console.log(val)
        this.animateCarousel();
    });
  }

  animateCarousel(){
    this.imageState == 'hide' ? this.imageState = 'show': this.imageState = 'hide';
    this.currentIndex++;
    if(this.currentIndex == this.images.length){
      this.currentIndex = 0;
    }
  }
}
