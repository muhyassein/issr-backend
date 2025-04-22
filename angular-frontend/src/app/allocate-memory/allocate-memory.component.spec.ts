import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateMemoryComponent } from './allocate-memory.component';

describe('AllocateMemoryComponent', () => {
  let component: AllocateMemoryComponent;
  let fixture: ComponentFixture<AllocateMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateMemoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
