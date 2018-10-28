import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { DonationComponent } from '../app/donation/donation.component';
import { PostFormComponent } from '../app/post-form/post-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomePageComponent},
  { path: 'donation', component: DonationComponent},
  { path: 'postform', component: PostFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }