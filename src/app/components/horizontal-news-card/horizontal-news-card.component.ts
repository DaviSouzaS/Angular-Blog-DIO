import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-news-card',
  templateUrl: './horizontal-news-card.component.html',
  styleUrls: ['./horizontal-news-card.component.css']
})
export class HorizontalNewsCardComponent {

  @Input()
  name: string = ""

  @Input()
  date: string = ""

  @Input()
  image: string = ""

  constructor() {}

  ngOnInit(){}
}
