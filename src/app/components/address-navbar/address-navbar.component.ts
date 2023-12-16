import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AddressNavbarService } from './address-navbar.service';

@Component({
  selector: 'app-address-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './address-navbar.component.html',
  styleUrl: './address-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AddressNavbarComponent implements OnInit {
  pageTitle: string = '';

  constructor(private addressNavbarService: AddressNavbarService) {}

  ngOnInit(): void {
    this.pageTitle = this.addressNavbarService.getPageTitle();
  }
}
