import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {Button} from "primeng/button";
import {AppService} from "./core/services/app/app.service";
import {AppSpace} from "@app/core/enums/app.namespace";
import {FullScreenComponent} from "@app/layouts/full-screen/full-screen.component";
import {MainComponent} from "@app/layouts/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, Button, FullScreenComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  layout: AppSpace.LayoutEnum = AppSpace.LayoutEnum.MAIN;

  constructor(
    public appService: AppService
  ) {
  }

  protected readonly AppSpace = AppSpace;
}
