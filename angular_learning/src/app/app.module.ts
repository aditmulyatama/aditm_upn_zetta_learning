import { DataService } from './service/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { MatRadioModule } from '@angular/material/radio';
import { EditDataComponent } from './edit/edit-data/edit-data.component';
import { ListDataComponent } from './list/list-data/list-data.component';
import { SearchPipe } from './search.pipe';
import { AddDataComponent } from './add/add-data/add-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EditDataComponent,
    ListDataComponent,
    SearchPipe,
    AddDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
