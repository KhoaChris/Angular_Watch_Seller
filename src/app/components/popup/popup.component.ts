import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Optional to export if you want to use elsewhere; not required by the service above
export type PopupStatus = 'success' | 'error' | 'info';
export interface PopupData {
  message: string;
  status?: PopupStatus;
}

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PopupComponent {
  constructor(
    private dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopupData
  ) {}

  get isSuccess(): boolean { return (this.data.status || 'success') === 'success'; }
  get isError(): boolean { return this.data.status === 'error'; }
  get isInfo(): boolean { return this.data.status === 'info'; }

  close(): void { this.dialogRef.close(); }
}

