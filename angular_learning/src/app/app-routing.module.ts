import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemListComponent } from './item/item-list/item-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'item-list', pathMatch: 'full' },
  { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: 'item-list', component: ItemListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
