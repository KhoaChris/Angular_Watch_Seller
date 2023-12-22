import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup.component';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(public dialog: MatDialog) {}

  openPopup(message: string): void {
    this.dialog.open(PopupComponent, {
      data: { message },
    });
  }
}
