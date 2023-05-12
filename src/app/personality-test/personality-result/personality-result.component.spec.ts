import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityResultComponent } from './personality-result.component';

describe('PersonalityResultComponent', () => {
  let component: PersonalityResultComponent;
  let fixture: ComponentFixture<PersonalityResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalityResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
