import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PageContentsAboutComponent } from '../../components/page-contents-about/page-contents-about.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    PageContentsAboutComponent
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AboutUsPageComponent { }
