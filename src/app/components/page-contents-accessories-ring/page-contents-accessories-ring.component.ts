import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-contents-accessories-ring',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-contents-accessories-ring.component.html',
  styleUrl: './page-contents-accessories-ring.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsAccessoriesRingComponent { }
