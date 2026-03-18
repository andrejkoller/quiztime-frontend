import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNameInput } from './player-name-input';

describe('PlayerNameInput', () => {
  let component: PlayerNameInput;
  let fixture: ComponentFixture<PlayerNameInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerNameInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerNameInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
