import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-contents-about',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-contents-about.component.html',
  styleUrl: './page-contents-about.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsAboutComponent { }
