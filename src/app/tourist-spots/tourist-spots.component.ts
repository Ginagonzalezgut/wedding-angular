import { Component, Input } from '@angular/core';
import { TouristSpot } from '../types/TouristSpot';

@Component({
  selector: 'tourist-spots',
  imports: [],
  templateUrl: './tourist-spots.component.html',
  styleUrl: './tourist-spots.component.scss',
})
export class TouristSpotsComponent {
  @Input() touristSpot: TouristSpot = {
    imageSpot: '',
    name: '',
  };
}
