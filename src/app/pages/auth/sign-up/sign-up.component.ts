import {Component, OnInit} from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "@app/core/services/auth/authentication.service";
import {SignInDto} from "@app/core/models/auth/sign-in.dto";
import {SignUpDto} from "@app/core/models/auth/sign-up.dto";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {Message} from "primeng/api";
import {PasswordModule} from "primeng/password";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    Button,
    ButtonDirective,
    InputTextModule,
    PaginatorModule,
    ReactiveFormsModule,
    TranslateModule,
    MessageModule,
    MessagesModule,
    PasswordModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.loginForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      staySignedIn: new FormControl(false, Validators.required)
    })
  }

  signUp() {
    if (!this.loginForm) return;
    const signUpDto : SignUpDto = this.loginForm.value;
    this.authenticationService.signUp(signUpDto).subscribe(() => {
      this.router.navigate(['sign-in'], { queryParams: { signupSuccess: true } }).then();
    });
  }

  signInLink() {
    this.router.navigate(['sign-in']).then();
  }
}
