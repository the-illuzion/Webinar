import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeminarPageComponent } from './seminar-page/seminar-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
	{ path: 'seminar', component: SeminarPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
