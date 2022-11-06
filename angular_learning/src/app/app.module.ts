import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { ItemCardsComponent } from './item-cards/item-cards.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, ItemInputComponent, ItemCardsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
