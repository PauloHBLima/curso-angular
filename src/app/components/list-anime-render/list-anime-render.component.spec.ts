import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimeRenderComponent } from './list-anime-render.component';

describe('ListAnimeRenderComponent', () => {
  let component: ListAnimeRenderComponent;
  let fixture: ComponentFixture<ListAnimeRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnimeRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnimeRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
