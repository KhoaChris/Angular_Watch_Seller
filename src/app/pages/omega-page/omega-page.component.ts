import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AddressNavbarService } from '../../components/address-navbar/address-navbar.service';
import { AddressNavbarComponent } from '../../components/address-navbar/address-navbar.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PageContentsWatchesOmegaComponent } from '../../components/page-contents-watches-omega/page-contents-watches-omega.component';

@Component({
  selector: 'app-omega-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    AddressNavbarComponent,
    PageContentsWatchesOmegaComponent,
    BottomRowNavbarComponent,
  ],
  templateUrl: './omega-page.component.html',
  styleUrl: './omega-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class OmegaPageComponent implements OnInit{
  constructor(private addressNavbarService: AddressNavbarService) {}

  ngOnInit(): void {
    this.addressNavbarService.setPageTitle('Omega');
  }
}
