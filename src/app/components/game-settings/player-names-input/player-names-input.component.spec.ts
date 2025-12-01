import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNamesInputComponent } from './player-names-input.component';

describe('PlayerNamesInputComponent', () => {
  let component: PlayerNamesInputComponent;
  let fixture: ComponentFixture<PlayerNamesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerNamesInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerNamesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
