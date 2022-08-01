import {Component, OnInit} from '@angular/core';

@Component({
 selector: 'app-cards',
 templateUrl: './cards.component.html',
 styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

 private images = [
  {id: 1, url: "/assets/images/10.png"},
  {id: 2, url: "/assets/images/J.png"},
  {id: 3, url: "/assets/images/K.png"},
  {id: 4, url: "/assets/images/Q.png"}
 ];
 private aciertos = 4;
 private last_select_id = null;
 public cards = [];
 public cont_intentos = 0;
 public count_aciertos = 0;
 public images_inact = "/assets/images/poker.png";
 public intentos = 12;

 constructor() {
 }

 ngOnInit() {
  let count_index = 0;
  for (let i = 0; i < this.aciertos * 2; i++) {
   if (count_index == this.aciertos) {
    count_index = 0;
   }
   let img = this.images[count_index];
   this.cards.push({
    id: img.id,
    active: true, 
    url: img.url,
    visible: false 
   });
   count_index++;
  }
  this.randomCards(this.cards);
 }


 cardSelected(idx) {
  if (!this.cards[idx].active) {
   return;
  }
  this.cards[idx].visible = true;

  if (this.last_select_id == null) {
   this.last_select_id = idx;
   this.cards[idx].visible = true;
   this.cards[idx].active = false;
  } else {
      this.logicGame(idx);
  }
  if (this.aciertos == this.count_aciertos) {
   alert("Ganaste!!");
   window.location.reload();
  }
  if (this.cont_intentos == this.intentos - 1) {
   alert("Te quedaste sin intentos");
   window.location.reload();
  }
 }

 logicGame(idx){
    if (this.cards[this.last_select_id].id == this.cards[idx].id) { //aumentar aciertos si coinciden
        this.increasePoints(idx);
    } else { //no hacen match
        let _this = this;

        setTimeout(function() {
         _this.cards[_this.last_select_id].visible = false; //ocultar
         _this.cards[_this.last_select_id].active = true; //activar
         _this.cards[idx].visible = false;
         _this.last_select_id = null;
        }, 0.2 * 1000)
        this.cont_intentos++;
    }
 }

 increasePoints(idx){
    this.count_aciertos++;
    this.cards[idx].visible = true;
    this.cards[idx].active = false;
    this.last_select_id = null;
    this.cont_intentos++;
 }

 randomCards(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;

   temporaryValue = array[currentIndex];
   array[currentIndex] = array[randomIndex];
   array[randomIndex] = temporaryValue;
  }

  return array;
 }
}