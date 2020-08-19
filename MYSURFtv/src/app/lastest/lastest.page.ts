import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lastest',
  templateUrl: './lastest.page.html',
  styleUrls: ['./lastest.page.scss'],
})
export class LastestPage implements OnInit {
  items = [
    {
      src: "assets/img/1.png",
      name: "king pie"
    },

    {
      src: "assets/img/2.png",
      name: "Red maggot"
    },
    {
      src: "assets/img/3.png",
      name: "Pigeon"
    },
    {
      src: "assets/img/1.png",
      name: "Pinacle"
    },
    {
      src: "assets/img/2.png",
      name: "Pinacle"
    },
    {
      src: "assets/net1.jpg",
      name: "Pinacle"
    }
  ];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.5,
    speed: 400,
    
  };
  constructor() { }

  ngOnInit() {
  }

}
