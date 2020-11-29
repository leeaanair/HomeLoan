import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatCalcDocComponentComponent } from './feat-calc-doc-component.component';

describe('FeatCalcDocComponentComponent', () => {
  let component: FeatCalcDocComponentComponent;
  let fixture: ComponentFixture<FeatCalcDocComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatCalcDocComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatCalcDocComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
