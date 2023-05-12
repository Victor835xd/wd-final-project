import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarkResultComponent } from './vark-result.component';

describe('VarkResultComponent', () => {
  let component: VarkResultComponent;
  let fixture: ComponentFixture<VarkResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarkResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarkResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
