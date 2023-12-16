import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contents-not-found',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contents-not-found.component.html',
  styleUrl: './contents-not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ContentsNotFoundComponent { }
