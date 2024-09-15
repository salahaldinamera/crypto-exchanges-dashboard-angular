import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AppSpace} from "@app/core/enums/app.namespace";
import LocalStorageKeysEnum = AppSpace.LocalStorageKeysEnum;
import {LocalStorageService} from "@app/core/services/local-storage/local-storage.service";
import {Injectable} from "@angular/core";
import {jwtDecode} from "jwt-decode";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {
  }

  canActivate(): boolean | Observable<boolean> {
    const token = this.localStorageService.getLocalStorageItem(LocalStorageKeysEnum.TOKEN);

    if (token && this.isTokenValid(token)) {
      return true;
    } else {
      const isSignIn: string  = 'sign-in';
      const isSignOut: string  = 'sign-out';
      const redirectPath = (!isSignIn || !isSignOut) ? { 'redirect': window.location.pathname } : {};
      this.router.navigate(['sign-in'], { queryParams: redirectPath }).then();
      return false;
    }
  }

  private isTokenValid(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token);
      const expirationTime = decodedToken.exp * 1000; // 'exp' is in seconds, convert to milliseconds
      const currentTime = Date.now();

      // Token is valid if it's not expired
      return currentTime < expirationTime;
    } catch (error) {
      // Handle invalid token format
      console.error('Invalid token format:', error);
      return false;
    }
  }
}
