import {Injectable} from "@angular/core";
import {AuthenticationService} from "@app/core/services/auth/authentication.service";
import {SignInResponseDto} from "@app/core/models/auth/sign-in-response.dto";
import {LocalStorageService} from "@app/core/services/local-storage/local-storage.service";
import {AppSpace} from "@app/core/enums/app.namespace";
import {Router} from "@angular/router";


@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
  }

  signIn(signInResponseDto: SignInResponseDto) {
    this.localStorageService.setLocalStorageItem(AppSpace.LocalStorageKeysEnum.TOKEN, signInResponseDto.jwtToken);
  }

  signOut() {
    this.localStorageService.removeLocalStorageItem(AppSpace.LocalStorageKeysEnum.TOKEN);
    this.router.navigate(['']);
  }
}
