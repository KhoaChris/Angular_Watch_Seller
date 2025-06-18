import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoaderComponent {
  constructor(public loadingService: LoadingService) {}
}
