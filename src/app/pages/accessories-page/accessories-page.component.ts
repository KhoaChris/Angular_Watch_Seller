import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-accessories-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './accessories-page.component.html',
  styleUrl: './accessories-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AccessoriesPageComponent { }
