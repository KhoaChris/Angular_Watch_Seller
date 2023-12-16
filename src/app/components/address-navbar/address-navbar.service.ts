import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddressNavbarService {
  pageTitle: any;

  setPageTitle(title: string) {
    this.pageTitle = title;
  }

  getPageTitle() {
    return this.pageTitle;
  }
}
