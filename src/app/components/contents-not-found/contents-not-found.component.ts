import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contents-not-found',
  standalone: true,
  imports: [CommonModule, HomePageComponent],
  templateUrl: './contents-not-found.component.html',
  styleUrl: './contents-not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ContentsNotFoundComponent {
  constructor(private router: Router) {}

  navToHome() {
    this.router.navigate(['Home']);
  }
}
