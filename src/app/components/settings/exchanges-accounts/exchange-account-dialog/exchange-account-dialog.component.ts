import {Component, OnInit, output} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExchangeAccount } from '@app/core/models/exchange-accounts/exchange-account.model';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ExchangesAccountsService} from "@app/core/services/exchanges-apis/exchanges-accounts.service";

@Component({
  selector: 'app-exchange-account-dialog',
  standalone: true,
  imports: [
    DialogModule,
    TranslateModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './exchange-account-dialog.component.html',
  styleUrls: ['./exchange-account-dialog.component.scss']
})
export class ExchangeAccountDialogComponent implements OnInit {

  exchangeAccount: ExchangeAccount | null = null;
  formGroup!: FormGroup;
  visible = false;

  exchangeAccountEmitter = output<ExchangeAccount>()

  constructor(
    private exchangesAccountsService: ExchangesAccountsService,
  ) {}

  ngOnInit() {
    this.initFormGroup();
  }

  private initFormGroup() {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
      exchangeAccountApis: new FormControl([])
    });
  }

  showDialog(exchangeAccount?: ExchangeAccount) {
    this.visible = true;
    if (exchangeAccount) {
      this.exchangeAccount = exchangeAccount;
      this.formGroup.patchValue(exchangeAccount);
    } else {
      this.resetForm(); // Reset for new entry
    }
  }

  private resetForm() {
    this.exchangeAccount = null;
    this.formGroup.reset({
      id: null,
      name: '',
      color: '',
      logo: '',
    });
  }

  createAccountExchange(exchangeAccount: ExchangeAccount) {
    this.exchangesAccountsService.createExchangeAccount(exchangeAccount).subscribe((data: ExchangeAccount) => {
      this.exchangeAccountEmitter.emit(data);
      this.visible = false;
    })
  }

  updateAccountExchange(exchangeAccount: ExchangeAccount) {
    this.exchangesAccountsService.updateExchangeAccount(exchangeAccount.id, exchangeAccount).subscribe((data: ExchangeAccount) => {
      this.exchangeAccountEmitter.emit(data);
      this.visible = false;
    })
  }

  onSave() {
    if (this.formGroup.valid) {
      const exchangeAccount = this.formGroup.value as ExchangeAccount;
      this.exchangeAccount?.id ? this.updateAccountExchange(exchangeAccount) : this.createAccountExchange(exchangeAccount)
    }
  }

  onCancel() {
    this.visible = false;
  }
}
