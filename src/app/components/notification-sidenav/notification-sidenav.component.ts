import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-notification-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-sidenav.component.html',
  styleUrl: './notification-sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class NotificationSidenavComponent {
}
