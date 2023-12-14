import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-page-contents-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-contents-signup.component.html',
  styleUrl: './page-contents-signup.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsSignupComponent {
  constructor(private router: Router) {}

  token = 0;

  navToLogIn() {
    this.router.navigate(['Login']);
  }
}
