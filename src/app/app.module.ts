import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { PrincipalNewsCardComponent } from './principal-news-card/principal-news-card.component';
import { HorizontalNewsCardComponent } from './horizontal-news-card/horizontal-news-card.component';
import { VerticalNewsCardComponent } from './vertical-news-card/vertical-news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    PrincipalNewsCardComponent,
    HorizontalNewsCardComponent,
    VerticalNewsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
