import {Injectable} from "@angular/core";
import {AuthenticationService} from "@app/core/services/auth/authentication.service";
import {SignInDto} from "@app/core/models/auth/sign-in.dto";
import {SignInResponseDto} from "@app/core/models/auth/sign-in-response.dto";
import {LocalStorageService} from "@app/core/services/local-storage/local-storage.service";
import {AppSpace} from "@app/core/enums/app.namespace";
import LocalStorageKeysEnum = AppSpace.LocalStorageKeysEnum;


@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService,
  ) {
  }

  signIn(signInDto: SignInDto) {
    this.authenticationService.signIn(signInDto).subscribe((data: SignInResponseDto) => {
      this.localStorageService.setLocalStorageItem(LocalStorageKeysEnum.TOKEN, data.jwtToken);
    })
  }
}
