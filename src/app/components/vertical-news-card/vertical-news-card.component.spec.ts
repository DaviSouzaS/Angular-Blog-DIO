import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNewsCardComponent } from './vertical-news-card.component';

describe('VerticalNewsCardComponent', () => {
  let component: VerticalNewsCardComponent;
  let fixture: ComponentFixture<VerticalNewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalNewsCardComponent]
    });
    fixture = TestBed.createComponent(VerticalNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
