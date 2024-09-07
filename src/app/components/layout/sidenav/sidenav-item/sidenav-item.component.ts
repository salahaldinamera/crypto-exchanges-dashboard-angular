import { Component, input } from '@angular/core';
import {SidenavItem} from "@app/core/models/sidenav/sidenav-item";
import {Router} from "@angular/router";
import {NgClass} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-sidenav-item',
  standalone: true,
  imports: [
    NgClass,
    TooltipModule,
    TranslateModule
  ],
  templateUrl: './sidenav-item.component.html',
  styleUrl: './sidenav-item.component.scss'
})
export class SidenavItemComponent {
  sidenavItem = input<SidenavItem>();
  selected = input<boolean>();

  constructor(
    private router: Router
  ) {
  }

  navigate() {
    if (this.sidenavItem()?.link == null) return;
    this.router.navigate([this.sidenavItem()?.link]);
  }
}
