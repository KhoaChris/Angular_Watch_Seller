import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';

@Component({
  selector: 'app-hublot-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    BottomRowNavbarComponent
  ],
  templateUrl: './hublot-page.component.html',
  styleUrl: './hublot-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HublotPageComponent { }
