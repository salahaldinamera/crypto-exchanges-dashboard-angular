import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {Button} from "primeng/button";
import {AppService} from "./core/services/app/app.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'crypto-exchanges-dashboard-angular';

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit(): void {
    this.appService.initApp();
  }
}
