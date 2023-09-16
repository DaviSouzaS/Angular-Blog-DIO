import { Component, Input } from '@angular/core';
import { iMockData } from 'src/app/pages/home/home.interface';

@Component({
  selector: 'app-horizontal-news-card',
  templateUrl: './horizontal-news-card.component.html',
  styleUrls: ['./horizontal-news-card.component.css']
})
export class HorizontalNewsCardComponent {

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
