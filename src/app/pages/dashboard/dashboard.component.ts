import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {AccountService} from "@app/core/services/account/account.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  constructor(
    private accountService: AccountService,
  ) {
    accountService.getBalance().subscribe(() => {
    })
  }
}
