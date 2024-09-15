import {Component, OnInit, output} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ExchangeAccount } from '@app/core/models/exchange-accounts/exchange-account.model';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ExchangesAccountsService} from "@app/core/services/exchanges-apis/exchanges-accounts.service";
import {InputGroupModule} from "primeng/inputgroup";
import {FloatLabelModule} from "primeng/floatlabel";
import {ColorPickerModule} from "primeng/colorpicker";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {FloatLabelInputComponent} from "@app/components/custom/float-label-input/float-label-input.component";
import {ColorPickerInputComponent} from "@app/components/custom/color-picker-input/color-picker-input.component";

@Component({
  selector: 'app-exchange-account-dialog',
  standalone: true,
  imports: [
    DialogModule,
    TranslateModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputGroupModule,
    FloatLabelModule,
    ColorPickerModule,
    FormsModule,
    InputGroupAddonModule,
    FloatLabelInputComponent,
    ColorPickerInputComponent
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
