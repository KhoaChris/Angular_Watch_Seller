import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AddressNavbarComponent } from '../../components/address-navbar/address-navbar.component';
import { PageContentsWatchesVconstantineComponent } from '../../components/page-contents-watches-vconstantin/page-contents-watches-vconstantine.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';
import { AddressNavbarService } from '../../components/address-navbar/address-navbar.service';

@Component({
  selector: 'app-vcons-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    AddressNavbarComponent,
    PageContentsWatchesVconstantineComponent,
    BottomRowNavbarComponent,
  ],
  templateUrl: './vcons-page.component.html',
  styleUrl: './vcons-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class VacheronConstantinComponent implements OnInit {
  constructor(private addressNavbarService: AddressNavbarService) {}

  ngOnInit(): void {
    this.addressNavbarService.setPageTitle('VacheronConstantin');
  }
}
