import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberParComponent } from './number-par.component';

describe('NumberParComponent', () => {
  let component: NumberParComponent;
  let fixture: ComponentFixture<NumberParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberParComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
