import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-contents-watches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-contents-watches.component.html',
  styleUrl: './page-contents-watches.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsWatchesComponent {}
