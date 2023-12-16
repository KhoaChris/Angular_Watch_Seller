import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';
import { AddressNavbarComponent } from '../../components/address-navbar/address-navbar.component';
import { AddressNavbarService } from '../../components/address-navbar/address-navbar.service';

@Component({
  selector: 'app-hublot-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    BottomRowNavbarComponent,
    AddressNavbarComponent
  ],
  templateUrl: './hublot-page.component.html',
  styleUrl: './hublot-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HublotPageComponent implements OnInit { 
  constructor(private addressNavbarService: AddressNavbarService) {}

  ngOnInit(): void {
    this.addressNavbarService.setPageTitle('Hublot');
  }
}
