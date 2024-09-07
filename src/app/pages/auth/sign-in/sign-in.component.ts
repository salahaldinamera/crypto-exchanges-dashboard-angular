import {Component, OnInit} from '@angular/core';
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "@app/core/services/auth/auth.service";
import {SignInDto} from "@app/core/models/auth/sign-in.dto";
import {TranslateModule} from "@ngx-translate/core";
import {Button, ButtonDirective} from "primeng/button";
import {ActivatedRoute, Router} from "@angular/router";
import {SignInResponseDto} from "@app/core/models/auth/sign-in-response.dto";
import {AuthenticationService} from "@app/core/services/auth/authentication.service";
import {Message} from "primeng/api";
import {MessagesModule} from "primeng/messages";
import {PasswordModule} from "primeng/password";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    Button,
    ButtonDirective,
    MessagesModule,
    PasswordModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {

  loginForm!: FormGroup;

  messages!: Message[];

  constructor(
    private authenticationService: AuthenticationService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.checkSignUpMessage()
  }

  private initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      staySignedIn: new FormControl(false, Validators.required)
    })
  }

  private checkSignUpMessage() {
    // Check for signupSuccess query param to show a success message
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['signupSuccess']) {
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Signup successful. Please sign in.' }];
      }
    });
  }

  signIn() {
    if (!this.loginForm) return;
    const signInDto : SignInDto = this.loginForm.value;
    this.authenticationService.signIn(signInDto).subscribe((data: SignInResponseDto) => {
      this.authService.signIn(data);
      this.router.navigate(['dashboard']).then();
    })
  }

  signUpLink() {
    this.router.navigate(['sign-up']).then();
  }
}
