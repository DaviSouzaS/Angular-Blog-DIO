import { Component, Input } from '@angular/core';
import { data } from "../../mock/data"
import { iMockData } from 'src/app/pages/home/home.interface';

@Component({
  selector: 'app-principal-news-card',
  templateUrl: './principal-news-card.component.html',
  styleUrls: ['./principal-news-card.component.css']
})

export class PrincipalNewsCardComponent {

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
