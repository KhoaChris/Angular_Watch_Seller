// sidenav.service.ts
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({ providedIn: 'root' })
export class SidenavService {
  private sidenav: MatSidenav | undefined;

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  openFavorites() {
    this.sidenav?.open();
  }

  close() {
    this.sidenav?.close();
  }
}
