import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from './popup.component';

// Define the status type locally (no cross-import required)
type PopupStatus = 'success' | 'error' | 'info';

/** Toast-like popup:
 *  - Single instance (replaces existing instead of stacking)
 *  - Auto-dismiss with duration (default 2000ms)
 *  - Status: success | error | info
 */
@Injectable({ providedIn: 'root' })
export class PopupService {
  private ref: MatDialogRef<PopupComponent> | null = null;

  constructor(private dialog: MatDialog) {}

  openPopup(
    message: string,
    status: PopupStatus = 'success',
    duration = 2000
  ): void {
    // Close existing
    if (this.ref) {
      this.ref.close();
      this.ref = null;
    }

    this.ref = this.dialog.open(PopupComponent, {
      data: { message, status },
      hasBackdrop: false,
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      panelClass: ['popup-dialog', `popup-${status}`],
    });

    const ms = Math.max(800, duration || 2000);
    const timer = setTimeout(() => this.ref?.close(), ms);

    this.ref.afterClosed().subscribe(() => {
      clearTimeout(timer);
      this.ref = null;
    });
  }
}
