import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemListComponent } from './item/item-list/item-list.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
