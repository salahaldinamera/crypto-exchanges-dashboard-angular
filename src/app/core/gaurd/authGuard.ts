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
    console.log('hi')
    const token = this.localStorageService.getLocalStorageItem(LocalStorageKeysEnum.TOKEN);
    console.log(token);
    if (token && this.isTokenValid(token)) {
      return true;
    } else {
      this.router.navigate(['sign-in'],{queryParams:{'redirect':window.location.pathname}}).then();
      return false;
    }
  }

  // Simple token validation, you can improve it as needed
  private isTokenValid(token: string): boolean {
    // Decode token and validate its expiration and other details
    // You can use a JWT library here
    return !!token; // For simplicity, we are just checking if the token exists
  }
}
