import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalNewsCardComponent } from './horizontal-news-card.component';

describe('HorizontalNewsCardComponent', () => {
  let component: HorizontalNewsCardComponent;
  let fixture: ComponentFixture<HorizontalNewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalNewsCardComponent]
    });
    fixture = TestBed.createComponent(HorizontalNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
