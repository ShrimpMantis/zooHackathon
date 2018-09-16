import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsgridComponent } from './resultsgrid.component';

describe('ResultsgridComponent', () => {
  let component: ResultsgridComponent;
  let fixture: ComponentFixture<ResultsgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
