import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundsCount } from './rounds-count';

describe('RoundsCount', () => {
  let component: RoundsCount;
  let fixture: ComponentFixture<RoundsCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundsCount],
    }).compileComponents();

    fixture = TestBed.createComponent(RoundsCount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
