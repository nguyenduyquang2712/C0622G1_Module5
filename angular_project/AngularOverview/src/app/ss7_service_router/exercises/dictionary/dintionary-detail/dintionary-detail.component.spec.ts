import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DintionaryDetailComponent } from './dintionary-detail.component';

describe('DintionaryDetailComponent', () => {
  let component: DintionaryDetailComponent;
  let fixture: ComponentFixture<DintionaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DintionaryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DintionaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
