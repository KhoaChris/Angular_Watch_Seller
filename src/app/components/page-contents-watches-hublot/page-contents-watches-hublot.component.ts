import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-contents-watches-hublot',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './page-contents-watches-hublot.component.html',
  styleUrl: './page-contents-watches-hublot.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsWatchesHublotComponent { 
  products = [
    {
      id: 1, name : 'BIG BANG TOURBILLON SR_A BY SAMUEL ROSS', price: '2000$', quantities: 5, imgURL: '../../assets/image9.png'
    },
    {
      id: 2, name : 'BIG BANG E GEN3 TITANIUM', price: '1000$', quantities: 5, imgURL: '../../assets/image10.png'
    }
  ]
}
