import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCount } from './player-count';

describe('PlayerCount', () => {
  let component: PlayerCount;
  let fixture: ComponentFixture<PlayerCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerCount],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerCount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
