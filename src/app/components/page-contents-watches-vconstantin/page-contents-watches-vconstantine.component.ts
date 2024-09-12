import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-contents-watches-vconstantine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-contents-watches-vconstantine.component.html',
  styleUrl: './page-contents-watches-vconstantine.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContentsWatchesVconstantineComponent {}
