import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidenavComponent} from "@app/components/layout/sidenav/sidenav.component";
import {HeaderComponent} from "@app/components/layout/header/header.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    SidenavComponent,
    HeaderComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
