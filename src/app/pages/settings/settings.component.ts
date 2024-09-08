import { Component } from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {TranslateModule} from "@ngx-translate/core";
import {ExchangesApisComponent} from "@app/components/settings/exchanges-apis/exchanges-apis.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    TabViewModule,
    TranslateModule,
    ExchangesApisComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
