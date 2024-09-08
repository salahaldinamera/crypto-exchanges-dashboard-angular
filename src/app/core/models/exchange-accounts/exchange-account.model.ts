import {ExchangeApi} from "@app/core/models/exchange-accounts/exchange-api.model";

export interface ExchangeAccount {
  name: string;
  color: string;
  logo: string;
  exchangeApis: ExchangeApi[];
}
