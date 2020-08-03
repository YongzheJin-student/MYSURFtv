import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts ={
    effect:'flip',
    autoplay:{
    delay:2000,
},
loop:true
};

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
