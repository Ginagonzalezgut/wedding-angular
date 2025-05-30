import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-our-story-page',
  imports: [HeroComponent,FooterComponent],
  templateUrl: './our-story-page.component.html',
  styleUrl: './our-story-page.component.scss'
})
export class OurStoryPageComponent {

}
