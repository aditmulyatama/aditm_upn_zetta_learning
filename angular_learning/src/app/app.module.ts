import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserInputComponent } from './user/user-input/user-input.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

@NgModule({
  declarations: [AppComponent, UserComponent, UserListComponent, UserInputComponent, UserEditComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
