import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MenuItem} from "primeng/api";
import {AppSpace} from "@app/core/enums/app.namespace";
import {AppService} from "@app/core/services/app/app.service";
import LanguageCodesEnum = AppSpace.LanguageCodesEnum;
import {ThemeService} from "@app/core/services/theme/theme.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Button,
    MenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  languageItems: MenuItem[] | undefined;

  constructor(
    private appService: AppService,
    public themeService: ThemeService,
  ) {
  }
  ngOnInit() {
    this.initLanguagesItems();
  }

  initLanguagesItems() {
    this.languageItems = [
      {
        label: '🇺🇸 EN',
        command: () => {
          this.appService.setAppLanguage(LanguageCodesEnum.EN);
        }
      },
      {
        label: '🇪🇸 ES',
        command: () => {
          this.appService.setAppLanguage(LanguageCodesEnum.ES);
        }
      },
      {
        label: '🇫🇷 FR',
        command: () => {
          this.appService.setAppLanguage(LanguageCodesEnum.FR);
        }
      }
    ]
  }
}
