import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-news-card',
  templateUrl: './vertical-news-card.component.html',
  styleUrls: ['./vertical-news-card.component.css']
})
export class VerticalNewsCardComponent {
  
  @Input()
  name: string = ""

  @Input()
  date: string = ""

  @Input()
  description: string = ""

  @Input()
  image: string = ""

  constructor() {}

  ngOnInit(){}
}
