import { Component, Input } from '@angular/core';

@Component({
  selector: 'story-moment',
  imports: [],
  templateUrl: './story-moment.component.html',
  styleUrl: './story-moment.component.scss',
})
export class StoryMomentComponent {
  @Input() year: number = 8;
  @Input() title: string = '';
}
