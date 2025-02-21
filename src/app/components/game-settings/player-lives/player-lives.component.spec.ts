import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLivesComponent } from './player-lives.component';

describe('PlayerLivesComponent', () => {
  let component: PlayerLivesComponent;
  let fixture: ComponentFixture<PlayerLivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerLivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerLivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
