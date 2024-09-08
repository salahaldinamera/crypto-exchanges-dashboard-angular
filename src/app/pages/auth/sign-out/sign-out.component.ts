import {Component} from '@angular/core';
import {AuthService} from "@app/core/services/auth/auth.service";

@Component({
  selector: 'app-sign-out',
  standalone: true,
  imports: [],
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.scss'
})
export class SignOutComponent {

  constructor(
    private authService: AuthService,
  ) {
    this.authService.signOut();
  }
}
