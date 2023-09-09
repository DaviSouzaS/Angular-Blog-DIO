import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { PrincipalNewsCardComponent } from './components/principal-news-card/principal-news-card.component';
import { HorizontalNewsCardComponent } from './components/horizontal-news-card/horizontal-news-card.component';
import { VerticalNewsCardComponent } from './components/vertical-news-card/vertical-news-card.component';

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
