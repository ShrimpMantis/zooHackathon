import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxFormComponent } from './search-box-form.component';

describe('SearchBoxFormComponent', () => {
  let component: SearchBoxFormComponent;
  let fixture: ComponentFixture<SearchBoxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
