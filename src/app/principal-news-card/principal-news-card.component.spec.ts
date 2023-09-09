import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalNewsCardComponent } from './principal-news-card.component';

describe('PrincipalNewsCardComponent', () => {
  let component: PrincipalNewsCardComponent;
  let fixture: ComponentFixture<PrincipalNewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalNewsCardComponent]
    });
    fixture = TestBed.createComponent(PrincipalNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
