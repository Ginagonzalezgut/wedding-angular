import { Component, Input } from '@angular/core';

type Direction = "row" | "column";

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() direction: Direction = "row";
}
