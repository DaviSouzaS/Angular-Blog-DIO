import { Component, Input } from '@angular/core';
import { iMockData } from 'src/app/pages/home/home.interface';

@Component({
  selector: 'app-vertical-news-card',
  templateUrl: './vertical-news-card.component.html',
  styleUrls: ['./vertical-news-card.component.css']
})
export class VerticalNewsCardComponent {
  
  @Input()
  data: iMockData = {
    id: 0, 
    name: "", 
    date: "", 
    description: "", 
    image: ""
  }

  constructor() {}

  ngOnInit(){}
}
