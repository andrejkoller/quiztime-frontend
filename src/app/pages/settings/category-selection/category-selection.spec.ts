import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySelection } from './category-selection';

describe('CategorySelection', () => {
  let component: CategorySelection;
  let fixture: ComponentFixture<CategorySelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySelection],
    }).compileComponents();

    fixture = TestBed.createComponent(CategorySelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
