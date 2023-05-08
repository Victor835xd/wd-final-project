import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityStatsComponent } from './personality-stats.component';

describe('PersonalityStatsComponent', () => {
  let component: PersonalityStatsComponent;
  let fixture: ComponentFixture<PersonalityStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalityStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
