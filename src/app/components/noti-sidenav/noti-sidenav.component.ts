import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-noti-sidenav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './noti-sidenav.component.html',
  styleUrl: './noti-sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotiSidenavComponent { }
