import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-full-screen',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './full-screen.component.html',
  styleUrl: './full-screen.component.scss'
})
export class FullScreenComponent {

}
