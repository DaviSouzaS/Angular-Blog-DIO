import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/mock/data';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent {

  @Input()
  id: number = 0

  @Input()
  name: string = ""

  @Input()
  date: string = ""

  @Input()
  description: string = ""

  @Input()
  image: string = ""

  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.id = Number(id)
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: number){
    const dataPage = data.filter(newsPage => newsPage.id === id)[0]

    this.description = dataPage.description
    this.date = dataPage.date
    this.image = dataPage.image
    this.name = dataPage.name
  }
}
