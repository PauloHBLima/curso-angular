import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDataSecondComponent } from './parent-data-second.component';

describe('ParentDataSecondComponent', () => {
  let component: ParentDataSecondComponent;
  let fixture: ComponentFixture<ParentDataSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDataSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDataSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
