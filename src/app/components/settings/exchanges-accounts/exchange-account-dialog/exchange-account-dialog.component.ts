import {Component, OnInit, output} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import {FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
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
import {TabViewModule} from "primeng/tabview";
import {AsFormGroupPipe} from "@app/core/pipes/as-form-group/as-form-group.pipe";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {NgTemplateOutlet} from "@angular/common";

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
    ColorPickerInputComponent,
    TabViewModule,
    AsFormGroupPipe,
    NgTemplateOutlet
  ],
  templateUrl: './exchange-account-dialog.component.html',
  styleUrls: ['./exchange-account-dialog.component.scss']
})
export class ExchangeAccountDialogComponent implements OnInit {

  exchangeAccount: ExchangeAccount | null = null;
  visible = false;

  exchangeAccountEmitter = output<ExchangeAccount>();

  exchangesAccountsFormGroup!: FormGroup;
  apisFormArray!: FormArray;

  isLoading: boolean = false;

  constructor(
    private exchangesAccountsService: ExchangesAccountsService,
  ) {}

  ngOnInit() {
    this.initFormGroup();
  }

  private initFormGroup() {
    this.apisFormArray = new FormArray([
      this.createApiFormGroup(true),
      this.createApiFormGroup(false),
    ]);

    this.exchangesAccountsFormGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
      apis: this.apisFormArray
    });
  }

  private createApiFormGroup(isDemo: boolean): FormGroup {
    return new FormGroup({
      id: new FormControl(null),
      name: new FormControl(''),
      apiKey: new FormControl(''),
      apiSecret: new FormControl(''),
      demo: new FormControl(isDemo)
    });
  }

  getApisControls(): FormArray {
    return this.exchangesAccountsFormGroup.get('apis') as FormArray;
  }

  addApi(isDemo: boolean) {
    const apis = this.exchangesAccountsFormGroup.get('apis') as FormArray;
    apis.push(this.createApiFormGroup(isDemo));
  }

  filterEmptyApis(apis: FormArray): FormArray {
    const validApis = apis.controls.filter(api => {
      const apiGroup = api as FormGroup;
      return apiGroup.get('apiKey')?.value && apiGroup.get('apiSecret')?.value;
    });
    return new FormArray(validApis);
  }

  showDialog(exchangeAccount?: ExchangeAccount) {
    this.visible = true;
    if (exchangeAccount) {
      this.exchangeAccount = exchangeAccount;
      this.exchangesAccountsFormGroup.patchValue(exchangeAccount);
    } else {
      this.resetForm();
    }
  }

  private resetForm() {
    this.exchangeAccount = null;
    this.exchangesAccountsFormGroup.reset({
      id: null,
      name: '',
      color: '',
      logo: '',
    });
    (this.exchangesAccountsFormGroup.get('apis') as FormArray).clear();
    this.addApi(true);
    this.addApi(false);
  }

  createAccountExchange(exchangeAccount: ExchangeAccount) {
    this.isLoading = true;
    this.exchangesAccountsService.createExchangeAccount(exchangeAccount).subscribe((data: ExchangeAccount) => {
      this.exchangeAccountEmitter.emit(data);
      this.visible = false;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    })
  }

  updateAccountExchange(exchangeAccount: ExchangeAccount) {
    this.isLoading = true;
    this.exchangesAccountsService.updateExchangeAccount(exchangeAccount.id, exchangeAccount).subscribe((data: ExchangeAccount) => {
      this.exchangeAccountEmitter.emit(data);
      this.visible = false;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    })
  }

  onSave() {
    if (this.exchangesAccountsFormGroup.valid) {
      const exchangeAccount = this.exchangesAccountsFormGroup.value as ExchangeAccount;
      exchangeAccount.apis = this.filterEmptyApis(this.getApisControls()).controls.map(control => control.value);
      this.exchangeAccount?.id ? this.updateAccountExchange(exchangeAccount) : this.createAccountExchange(exchangeAccount)
    }
  }

  onCancel() {
    this.visible = false;
  }
}
