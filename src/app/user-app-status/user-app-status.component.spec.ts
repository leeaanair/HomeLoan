import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppStatusComponent } from './user-app-status.component';

describe('UserAppStatusComponent', () => {
  let component: UserAppStatusComponent;
  let fixture: ComponentFixture<UserAppStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAppStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAppStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
