import {Component, OnInit} from '@angular/core';
import {SidenavItem} from "@app/core/models/sidenav/sidenav-item";
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
  sidenavItems: SidenavItem[] | undefined;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initSidenavItems()
    this.subscribeRoutingChanges();
  }

  private initSidenavItems() {
    this.sidenavItems = [
      {
        title: 'DASHBOARD',
        icon: 'dashboard',
        link: '/dashboard',
      },
      {
        title: 'TRADE',
        icon: 'show_chart',
        link: '/trade',
      },
      {
        title: 'SETTINGS',
        icon: 'settings',
        link: '/settings',
      },
      {
        title: 'LOGOUT',
        icon: 'logout',
        link: '/logout',
      }
    ]
  }

  private subscribeRoutingChanges() {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        event.snapshot.title && (this.selectedItemTitle = event.snapshot.title);
      }
    });
  }

}
