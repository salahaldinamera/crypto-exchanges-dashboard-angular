import {Component, OnInit} from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {TableModule} from "primeng/table";
import {ExchangesAccountsService} from "@app/core/services/exchanges-apis/exchanges-accounts.service";
import {ExchangeAccount} from "@app/core/models/exchange-accounts/exchange-account.model";

@Component({
  selector: 'app-exchanges-accounts',
  standalone: true,
  imports: [
    ToolbarModule,
    Button,
    TableModule,
  ],
  templateUrl: './exchanges-accounts.component.html',
  styleUrl: './exchanges-accounts.component.scss'
})
export class ExchangesAccountsComponent implements OnInit {

  exchangeAccounts: ExchangeAccount[] = [];

  constructor(
    private exchangesAccountsService: ExchangesAccountsService
  ) {
  }

  ngOnInit(): void {
    this.loadExchangeAccounts();
  }

  loadExchangeAccounts(): void {
    this.exchangesAccountsService.getExchangeAccounts().subscribe((data: ExchangeAccount[]) => {
      this.exchangeAccounts = data;
      }
    );
  }

}
