import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswer } from './question-answer';

describe('QuestionAnswer', () => {
  let component: QuestionAnswer;
  let fixture: ComponentFixture<QuestionAnswer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionAnswer],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionAnswer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
