import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';

import { CardsService } from './services/cards.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ 
      player: playerFactory
    })
  ],
  providers: [CardsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
