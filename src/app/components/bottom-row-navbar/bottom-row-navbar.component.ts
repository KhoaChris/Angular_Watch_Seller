import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-row-navbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './bottom-row-navbar.component.html',
  styleUrl: './bottom-row-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BottomRowNavbarComponent { 
  constructor(private router:Router){}

  navToContact(){
    this.router.navigate(['Contact']);
  }
}
