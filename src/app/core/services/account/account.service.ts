import {Injectable} from "@angular/core";
import {environment} from "@src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({providedIn: 'root'})
export class AccountService {
  private baseUrl: string = environment.baseUrl + 'api/v1/account/';

  private balanceUrl: string = 'balance';

  constructor(
    private http: HttpClient
  ) {
  }

  getBalance(): Observable<number> {
    const url = this.baseUrl + this.balanceUrl;
    return this.http.get<number>(url);
  }
}
