import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principal-news-card',
  templateUrl: './principal-news-card.component.html',
  styleUrls: ['./principal-news-card.component.css']
})

export class PrincipalNewsCardComponent {

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
