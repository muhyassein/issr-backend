import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLoadComponent } from './check-load.component';

describe('CheckLoadComponent', () => {
  let component: CheckLoadComponent;
  let fixture: ComponentFixture<CheckLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
