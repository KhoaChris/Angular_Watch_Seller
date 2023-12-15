import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageContentsWatchesComponent } from '../../components/page-contents-watches/page-contents-watches.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';

@Component({
  selector: 'app-watches-page',
  standalone: true,
  imports: [CommonModule, PageContentsWatchesComponent, NavbarComponent, BottomRowNavbarComponent],
  templateUrl: './watches-page.component.html',
  styleUrl: './watches-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WatchesPageComponent {}
