import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {AccountService} from "@app/core/services/account/account.service";
import {DashboardCardComponent} from "@app/components/dashboard/dashboard-card/dashboard-card.component";
import {TranslationKeys} from "@app/core/enums/translations.enum";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TranslateModule,
    DashboardCardComponent,
    DecimalPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  balance: number = 0;

  constructor(
    private accountService: AccountService,
  ) {
    accountService.getBalance().subscribe((balance: number) => {
      this.balance = balance;
    })
  }

  protected readonly TranslationKeys = TranslationKeys;
}
