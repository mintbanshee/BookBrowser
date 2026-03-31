import { ComponentFixture, TestBed } from '@angular/core/testing';
// added provideRouter to avoid nullInjector error when running tests
// because edit-book uses router
import { provideRouter } from '@angular/router';
import { EditBook } from './edit-book';

describe('EditBook', () => {
  let component: EditBook;
  let fixture: ComponentFixture<EditBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBook],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBook);
    component = fixture.componentInstance;
    // changed await fixture.whenStable() to fixture.detectChanges() to ensure the component
    //  is initialized properly and to optimize
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
