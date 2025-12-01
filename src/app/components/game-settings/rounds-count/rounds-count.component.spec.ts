import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundsCountComponent } from './rounds-count.component';

describe('RoundsCountComponent', () => {
  let component: RoundsCountComponent;
  let fixture: ComponentFixture<RoundsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundsCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoundsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
