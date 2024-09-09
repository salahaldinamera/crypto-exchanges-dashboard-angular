import { Component } from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {TranslateModule} from "@ngx-translate/core";
import {ExchangesAccountsComponent} from "@app/components/settings/exchanges-accounts/exchanges-accounts.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    TabViewModule,
    TranslateModule,
    ExchangesAccountsComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
