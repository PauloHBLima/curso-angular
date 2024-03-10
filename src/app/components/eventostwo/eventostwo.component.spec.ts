import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventostwoComponent } from './eventostwo.component';

describe('EventostwoComponent', () => {
  let component: EventostwoComponent;
  let fixture: ComponentFixture<EventostwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventostwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventostwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
