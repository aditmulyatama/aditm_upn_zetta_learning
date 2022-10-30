import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { AddServerCardsComponent } from './add-server-cards/add-server-cards.component';
@NgModule({
  declarations: [AppComponent, CardsComponent, AddServerCardsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
