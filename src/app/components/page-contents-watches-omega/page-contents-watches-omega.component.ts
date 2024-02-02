import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-contents-watches-omega',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-contents-watches-omega.component.html',
  styleUrl: './page-contents-watches-omega.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsWatchesOmegaComponent { }
