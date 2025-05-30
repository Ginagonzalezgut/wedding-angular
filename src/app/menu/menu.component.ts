import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type Direction = "row" | "column";

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() direction: Direction = "row";
}
