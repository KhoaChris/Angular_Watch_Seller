import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-contents',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-contents.component.html',
  styleUrl: './page-contents.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsComponent { }
