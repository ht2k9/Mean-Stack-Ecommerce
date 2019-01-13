import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/user/signin/signin.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
  {path: 'user', component: SigninComponent },
  {path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
