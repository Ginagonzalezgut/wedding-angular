import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityPageComponent } from './city-page/city-page.component';
import { OurStoryPageComponent } from './our-story-page/our-story-page.component';

export const routes: Routes = [
    {path:"",component:HomeComponent,title:"Giselle & Fernando"},
    {path:"la-ciudad",component:CityPageComponent,title:"La Ciudad"},
{path:"nuestra-historia",component:OurStoryPageComponent,title:"Nuestra Historia"},
];
