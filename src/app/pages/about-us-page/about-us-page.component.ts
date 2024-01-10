import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PageContentsAboutComponent } from '../../components/page-contents-about/page-contents-about.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    PageContentsAboutComponent,
    BottomRowNavbarComponent
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AboutUsPageComponent { }
