import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollprogressComponent } from './scrollprogress.component';

describe('ScrollprogressComponent', () => {
  let component: ScrollprogressComponent;
  let fixture: ComponentFixture<ScrollprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollprogressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
