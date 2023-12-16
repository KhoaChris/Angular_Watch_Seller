import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-contents-watches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-contents-watches.component.html',
  styleUrl: './page-contents-watches.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsWatchesComponent {
  constructor (private router: Router){}

  navToHublot() {
    this.router.navigate(['Watches/Hublot'])
  }
}
