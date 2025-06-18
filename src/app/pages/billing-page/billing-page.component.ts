import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BottomRowNavbarComponent } from '../../components/bottom-row-navbar/bottom-row-navbar.component';
import { PageContentBillingComponent } from '../../components/page-content-billing/page-content-billing.component';
import { AddressNavbarComponent } from "../../components/address-navbar/address-navbar.component";

@Component({
  selector: 'app-billing-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    PageContentBillingComponent,
    BottomRowNavbarComponent,
    AddressNavbarComponent
],
  templateUrl: './billing-page.component.html',
  styleUrl: './billing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BillingPageComponent {}
