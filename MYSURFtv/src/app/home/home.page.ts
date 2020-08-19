import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
    src: "assets/img/1.png",
    name: "Pinacle"
  },
  {
    src: "assets/net1.jpg",
    name: "Pinacle"
  }
];

  constructor(private menu: MenuController,private modalController:ModalController,private router:Router) { }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  back(){
    this.router.navigateByUrl('/');
  } 

}
