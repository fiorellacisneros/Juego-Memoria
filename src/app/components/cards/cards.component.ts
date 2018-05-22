import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-cards',
 templateUrl: './cards.component.html',
 styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
 images = [
  {id:1, url: "/assets/images/10.png"},
  {id:2, url: "/assets/images/J.png"},
  {id:3, url: "/assets/images/K.png"},
  {id:4, url: "/assets/images/Q.png"}
 ];
 images_inact = "/assets/images/poker.png";
 cards = [];
 last_select_id = null;
 aciertos = 4;
 count_aciertos = 0;

 constructor() {}

 ngOnInit() {
  let count_index = 0;
  for(let i = 0; i < this.aciertos * 2; i++){
   if(count_index == this.aciertos){
    count_index = 0;
   }
   let img = this.images[count_index];
   this.cards.push({
    id: img.id, 
    url: img.url, 
    visible: false, //si la imagen se muestra
    active: true //seleccionable
   });
   count_index++;
  }
 }

}
