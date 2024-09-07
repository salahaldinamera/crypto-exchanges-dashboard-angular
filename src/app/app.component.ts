import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {Button} from "primeng/button";
import {FullScreenLayoutComponent} from "@app/layouts/full-screen/full-screen-layout.component";
import {MainLayoutComponent} from "@app/layouts/main/main-layout.component";
import {AppService} from "@app/core/services/app/app.service";
import {ThemeService} from "@app/core/services/theme/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, Button, FullScreenLayoutComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private appService: AppService,
    public themeService: ThemeService,
  ) {
  }
}
