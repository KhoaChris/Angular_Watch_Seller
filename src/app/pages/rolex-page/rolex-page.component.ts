import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AddressNavbarService } from '../../components/address-navbar/address-navbar.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AddressNavbarComponent } from '../../components/address-navbar/address-navbar.component';
import { PageContentsWatchesRolexComponent } from '../../components/page-contents-watches-rolex/page-contents-watches-rolex.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';

@Component({
  selector: 'app-rolex-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    AddressNavbarComponent,
    PageContentsWatchesRolexComponent,
    BottomRowNavbarComponent,
  ],
  templateUrl: './rolex-page.component.html',
  styleUrl: './rolex-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RolexPageComponent implements OnInit {
  constructor(private addressNavbarService: AddressNavbarService) {}

  ngOnInit(): void {
    this.addressNavbarService.setPageTitle('Rolex');
  }
}
