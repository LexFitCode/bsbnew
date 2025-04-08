import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatsHitterComponent } from './player-stats-hitter.component';

describe('PlayerStatsHitterComponent', () => {
  let component: PlayerStatsHitterComponent;
  let fixture: ComponentFixture<PlayerStatsHitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerStatsHitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerStatsHitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
