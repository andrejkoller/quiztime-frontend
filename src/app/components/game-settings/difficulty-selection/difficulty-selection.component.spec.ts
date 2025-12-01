import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultySelectionComponent } from './difficulty-selection.component';

describe('DifficultySelectionComponent', () => {
  let component: DifficultySelectionComponent;
  let fixture: ComponentFixture<DifficultySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifficultySelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DifficultySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
