import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-contents-accessories',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-contents-accessories.component.html',
  styleUrl: './page-contents-accessories.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsAccessoriesComponent { }
