import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherwindowComponent } from './weatherwindow/weatherwindow.component';


const routes: Routes = [
  { path: '', redirectTo: '/weatherwindow', pathMatch: 'full' },
  { path: 'weatherwindow', component: WeatherwindowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
