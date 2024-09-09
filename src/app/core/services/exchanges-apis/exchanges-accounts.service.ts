import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "@src/environments/environment";
import {ExchangeAccount} from "@app/core/models/exchange-accounts/exchange-account.model";
import {Observable} from "rxjs";


@Injectable({providedIn: 'root'})
export class ExchangesAccountsService {
  private baseUrl: string = environment.baseUrl + 'api/v1/exchanges-accounts/';

  constructor(
    private http: HttpClient
  ) { }

  createExchangeAccount(exchangeAccount: ExchangeAccount): Observable<ExchangeAccount> {
    const url = this.baseUrl;
    return this.http.post<ExchangeAccount>(url, exchangeAccount);
  }

  getExchangeAccounts(): Observable<ExchangeAccount[]> {
    const url = this.baseUrl;
    return this.http.get<ExchangeAccount[]>(url);
  }

  getExchangeAccount(id: number): Observable<ExchangeAccount> {
    const url = this.baseUrl + id;
    return this.http.get<ExchangeAccount>(url);
  }

  updateExchangeAccount(id: number, exchangeAccount: ExchangeAccount): Observable<ExchangeAccount> {
    const url = this.baseUrl + id;
    return this.http.put<ExchangeAccount>(url, exchangeAccount);
  }

  deleteExchangeAccount(id: number): Observable<number> {
    const url = this.baseUrl + id;
    return this.http.delete<number>(url);
  }
}
