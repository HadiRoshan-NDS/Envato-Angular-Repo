import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { WishComponent } from './wish/wish.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'wish', component: WishComponent },
  { path: 'contact', component: ContactComponent },

  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
