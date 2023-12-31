import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PageContentsAccessoriesComponent } from '../../components/page-contents-accessories/page-contents-accessories.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';

@Component({
  selector: 'app-accessories-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    PageContentsAccessoriesComponent,
    BottomRowNavbarComponent
  ],
  templateUrl: './accessories-page.component.html',
  styleUrl: './accessories-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AccessoriesPageComponent { }
