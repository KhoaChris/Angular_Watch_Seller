import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-contents-watches-hublot',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-contents-watches-hublot.component.html',
  styleUrl: './page-contents-watches-hublot.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsWatchesHublotComponent { }
