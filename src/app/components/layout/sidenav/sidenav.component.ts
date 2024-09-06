import {Component, OnInit} from '@angular/core';
import {SidenavItem} from "@app/core/models/sidenav/sidenav-item";
import {SidenavItems} from "@app/core/data/sidenav-items";
import {SidenavItemComponent} from "@app/components/layout/sidenav/sidenav-item/sidenav-item.component";
import {ActivationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    SidenavItemComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{
  subscription: Subscription | undefined;
  selectedItemTitle: string = '';
  sidenavItems: SidenavItem[] = SidenavItems;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.subscribeRoutingChanges()
  }

  private subscribeRoutingChanges() {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        event.snapshot.title && (this.selectedItemTitle = event.snapshot.title);
      }
    });
  }

}
