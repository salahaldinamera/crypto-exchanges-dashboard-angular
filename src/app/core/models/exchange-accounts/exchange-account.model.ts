import {ExchangeAccountApi} from "@app/core/models/exchange-accounts/exchange-api.model";

export interface ExchangeAccount {
  id: number;
  name: string;
  color: string;
  logo: string;
  apis: ExchangeAccountApi[];
}
