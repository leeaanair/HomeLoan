import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElgCalComponent } from './elg-cal.component';

describe('ElgCalComponent', () => {
  let component: ElgCalComponent;
  let fixture: ComponentFixture<ElgCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElgCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElgCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
