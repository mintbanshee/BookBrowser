// features/login/login.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
// added provideRouter to avoid nullInjector error when running tests
// because login uses router
import { provideRouter } from '@angular/router';


describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    // updated from await fixture.whenStable() to fixture.detectChanges()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
