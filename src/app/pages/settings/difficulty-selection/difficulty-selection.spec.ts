import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultySelection } from './difficulty-selection';

describe('DifficultySelection', () => {
  let component: DifficultySelection;
  let fixture: ComponentFixture<DifficultySelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifficultySelection],
    }).compileComponents();

    fixture = TestBed.createComponent(DifficultySelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
