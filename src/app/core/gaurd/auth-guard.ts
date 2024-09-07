import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AppSpace} from "@app/core/enums/app.namespace";
import LocalStorageKeysEnum = AppSpace.LocalStorageKeysEnum;
import {LocalStorageService} from "@app/core/services/local-storage/local-storage.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
  }

  canActivate(): boolean | Observable<boolean> {
    const token = this.localStorageService.getLocalStorageItem(LocalStorageKeysEnum.TOKEN);

    if (token && this.isTokenValid(token)) {
      return true;
    } else {
      const redirectPath = window.location.pathname !== '/sign-out' ? { 'redirect': window.location.pathname } : {};
      this.router.navigate(['sign-in'], { queryParams: redirectPath }).then();
      return false;
    }
  }

  private isTokenValid(token: string): boolean {
    return !!token;
  }
}
