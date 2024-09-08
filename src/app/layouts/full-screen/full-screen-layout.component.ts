import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-full-screen',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './full-screen-layout.component.html',
  styleUrl: './full-screen-layout.component.scss'
})
export class FullScreenLayoutComponent {

}
