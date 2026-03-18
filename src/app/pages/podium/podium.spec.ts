import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Podium } from './podium';

describe('Podium', () => {
  let component: Podium;
  let fixture: ComponentFixture<Podium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Podium],
    }).compileComponents();

    fixture = TestBed.createComponent(Podium);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
