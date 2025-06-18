import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class PopupComponent implements OnInit {
  // isLogin = false;
  // isLogOut = false;

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // ngOnInit(): void {
  //   if (this.data.message?.toLowerCase().includes('log out')) {
  //     this.isLogOut = true; // logout success
  //   }

  //   if (isPlatformBrowser(this.platformId)) {
  //     const storedData = window.localStorage.getItem('isLogin');
  //     if (storedData) {
  //       this.isLogin = true;
  //     } else {
  //       console.log('Not logged in');
  //     }
  //   }
  // }

  isSuccess = false;

  ngOnInit(): void {
    if (this.data.status === 'success') {
      this.isSuccess = true;
    }
  }
  close(): void {
    this.dialogRef.close();
  }
}
