import {Component, OnInit, ViewChild} from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {TableModule} from "primeng/table";
import {ExchangesAccountsService} from "@app/core/services/exchanges-apis/exchanges-accounts.service";
import {ExchangeAccount} from "@app/core/models/exchange-accounts/exchange-account.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {
  ExchangeAccountDialogComponent
} from "@app/components/settings/exchanges-accounts/exchange-account-dialog/exchange-account-dialog.component";

@Component({
  selector: 'app-exchanges-accounts',
  standalone: true,
  imports: [
    ToolbarModule,
    Button,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    TranslateModule,
    ExchangeAccountDialogComponent,
  ],
  templateUrl: './exchanges-accounts.component.html',
  styleUrl: './exchanges-accounts.component.scss'
})
export class ExchangesAccountsComponent implements OnInit {

  @ViewChild('exchangeAccountDialogComponent') exchangeAccountDialogComponent!: ExchangeAccountDialogComponent;

  exchangeAccounts: ExchangeAccount[] = [];

  constructor(
    private exchangesAccountsService: ExchangesAccountsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
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

  onCreate() {
    this.exchangeAccountDialogComponent.showDialog();
  }

  onEdit(exchangeAccount: ExchangeAccount) {
    this.exchangeAccountDialogComponent.showDialog(exchangeAccount);
  }

  onDelete(exchangeAccount: ExchangeAccount) {
    console.log('delete')
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: () => {
        this.exchangesAccountsService.deleteExchangeAccount(exchangeAccount.id).subscribe(() => {
          this.exchangeAccounts = this.exchangeAccounts.filter((val) => val.id !== exchangeAccount.id);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'ExchangeAccount Deleted', life: 3000 });
        })
      }
    });
  }

  alterTable(exchangeAccount: ExchangeAccount) {
    const existingIndex = this.exchangeAccounts.findIndex(acc => acc.id === exchangeAccount.id);
    (existingIndex !== -1) ? this.exchangeAccounts[existingIndex] = exchangeAccount : this.exchangeAccounts.push(exchangeAccount);
  }
}
