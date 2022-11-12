import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserInputComponent } from './user/user-input/user-input.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'users',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'user-list', pathMatch: 'full' },
      { path: 'user-edit/:id', component: UserEditComponent },
      { path: 'user-input', component: UserInputComponent },
      { path: 'user-list', component: UserListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
