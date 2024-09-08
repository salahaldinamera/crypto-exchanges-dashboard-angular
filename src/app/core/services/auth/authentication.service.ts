import {Injectable} from "@angular/core";
import {environment} from "@src/environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignInDto} from "@app/core/models/auth/sign-in.dto";
import {SignUpDto} from "@app/core/models/auth/sign-up.dto";
import {Observable} from "rxjs";
import {SignInResponseDto} from "@app/core/models/auth/sign-in-response.dto";


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private baseUrl: string = environment.baseUrl + 'api/v1/authenticate/';

  private signInUrl: string = 'sign-in';
  private signUpUrl: string = 'sign-up';

  constructor(
    private http: HttpClient,
  ) {
  }

  signIn(signInDto: SignInDto): Observable<SignInResponseDto> {
    const url = this.baseUrl + this.signInUrl;
    return this.http.post<SignInResponseDto>(url, signInDto);
  }

  signUp(signUpDto: SignUpDto) {
    const url = this.baseUrl + this.signUpUrl;
    return this.http.post(url, signUpDto);
  }
}
