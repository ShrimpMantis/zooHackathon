import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatMapLayerComponent } from './heat-map-layer.component';

describe('HeatMapLayerComponent', () => {
  let component: HeatMapLayerComponent;
  let fixture: ComponentFixture<HeatMapLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatMapLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatMapLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
