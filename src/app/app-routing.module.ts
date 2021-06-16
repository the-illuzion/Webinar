import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeminarPageComponent } from './seminar-page/seminar-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JoinnowComponent } from './joinnow/joinnow.component';

const routes: Routes = [
  { path: 'join', component: LandingPageComponent },
  { path: 'seminar', component: SeminarPageComponent},
  {path: '', component:JoinnowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
