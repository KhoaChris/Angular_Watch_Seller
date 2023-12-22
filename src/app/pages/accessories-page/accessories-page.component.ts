import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-accessories-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    
  ],
  templateUrl: './accessories-page.component.html',
  styleUrl: './accessories-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AccessoriesPageComponent { }
