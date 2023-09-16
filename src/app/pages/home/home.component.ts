import { Component } from '@angular/core';
import { data } from 'src/app/mock/data';
import { iMockData } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  data: iMockData[] = data

  principalCard = this.data.slice(0, 1);
  horizontalCards = this.data.slice(1, 4);
  verticalCards = this.data.slice(4);

  constructor(){}
}
