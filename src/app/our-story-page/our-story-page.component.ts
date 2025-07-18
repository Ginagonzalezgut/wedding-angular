import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { StoryMomentComponent } from '../story-moment/story-moment.component';
import { LinkComponent } from '../link/link.component';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-our-story-page',
  imports: [
    HeroComponent,
    FooterComponent,
    StoryMomentComponent,
    LinkComponent,
    QuoteComponent,
  ],
  templateUrl: './our-story-page.component.html',
  styleUrl: './our-story-page.component.scss',
})
export class OurStoryPageComponent {}
