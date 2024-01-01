import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-contents-contact',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-contents-contact.component.html',
  styleUrl: './page-contents-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsContactComponent { }
