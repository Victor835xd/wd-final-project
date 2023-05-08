import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarkFormComponent } from './vark-form.component';

describe('VarkFormComponent', () => {
  let component: VarkFormComponent;
  let fixture: ComponentFixture<VarkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarkFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
