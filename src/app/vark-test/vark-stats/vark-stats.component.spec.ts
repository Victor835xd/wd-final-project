import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarkStatsComponent } from './vark-stats.component';

describe('VarkStatsComponent', () => {
  let component: VarkStatsComponent;
  let fixture: ComponentFixture<VarkStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarkStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarkStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
