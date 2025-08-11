import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityPageComponent } from './city-page/city-page.component';
import { OurStoryPageComponent } from './our-story-page/our-story-page.component';
import { FaqComponent } from './faq/faq.component';
import { RsvpComponent } from './rsvp/rsvp.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Gabrielle & Francis' },
  { path: 'la-ciudad', component: CityPageComponent, title: 'La Ciudad' },
  {
    path: 'nuestra-historia',
    component: OurStoryPageComponent,
    title: 'Nuestra Historia',
  },
  {
    path: 'faq',
    component: FaqComponent,
    title: 'Preguntas Frecuentes',
  },
  {
    path: 'rsvp',
    component: RsvpComponent,
    title: 'RSVP',
  },
];
