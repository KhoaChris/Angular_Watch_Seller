import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-watches-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './watches-page.component.html',
  styleUrl: './watches-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WatchesPageComponent { }
