import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumberParComponent } from './change-number-par.component';

describe('ChangeNumberParComponent', () => {
  let component: ChangeNumberParComponent;
  let fixture: ComponentFixture<ChangeNumberParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNumberParComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNumberParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
