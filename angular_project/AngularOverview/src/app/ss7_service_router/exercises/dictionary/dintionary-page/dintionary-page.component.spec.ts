import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DintionaryPageComponent } from './dintionary-page.component';

describe('DintionaryPageComponent', () => {
  let component: DintionaryPageComponent;
  let fixture: ComponentFixture<DintionaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DintionaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DintionaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
