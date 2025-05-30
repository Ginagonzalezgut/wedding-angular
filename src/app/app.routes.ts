import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityPageComponent } from './city-page/city-page.component';

export const routes: Routes = [
    {path:"",component:HomeComponent,title:"Giselle & Fernando"},
      {path:"la-ciudad",component:CityPageComponent,title:"La Ciudad"}
];
