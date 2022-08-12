import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalGroupPageComponent } from './animal-group-page.component';

describe('AnimalGroupPageComponent', () => {
  let component: AnimalGroupPageComponent;
  let fixture: ComponentFixture<AnimalGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalGroupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
