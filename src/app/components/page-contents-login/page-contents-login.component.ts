import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-page-contents-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './page-contents-login.component.html',
  styleUrl: './page-contents-login.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsLoginComponent {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  isVisible = false;
  users = require('../../models/json/users.json');
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedData = window.localStorage.getItem('isLogin');
      if (storedData == '1') {
        this.router.navigate(['']);
      }
    } else {
      console.log('Please return to the login page');
    }
  }

  navToSignUp() {
    this.router.navigate(['Signup']);
  }

  handleClickMe(): void {
    if (!this.loginForm.invalid) {
      for (const user of this.users) {
        if (
          user.username === this.loginForm.value.username &&
          user.password === this.loginForm.value.password
        ) {
          localStorage.setItem('isLogin', '1');
          localStorage.setItem('account', JSON.stringify(user));
          this.router.navigate(['']);
          alert('You have successfully login');
          break;
        } else if (
          user.username !== this.loginForm.value.username ||
          user.password !== this.loginForm.value.password
        ) {
          alert('Invalid username or password !!!');
        }
      }
    }
  }

}
