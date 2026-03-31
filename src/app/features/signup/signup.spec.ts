// features/signup/signup.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Signup } from './signup';
// added provideRouter to avoid nullInjector error when running tests
// because signup uses router
import { provideRouter } from '@angular/router';

describe('Signup', () => {
  let component: Signup;
  let fixture: ComponentFixture<Signup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signup],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signup);
    component = fixture.componentInstance;
    // updated from await fixture.whenStable() to fixture.detectChanges()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
