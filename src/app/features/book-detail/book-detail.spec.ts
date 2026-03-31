import { ComponentFixture, TestBed } from '@angular/core/testing';
// added provideRouter to avoid nullInjector error when running tests
// because book-detail uses router
import { provideRouter } from '@angular/router';
import { BookDetail } from './book-detail';

describe('BookDetail', () => {
  let component: BookDetail;
  let fixture: ComponentFixture<BookDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetail],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetail);
    component = fixture.componentInstance;
    // changed await fixture.whenStable() to fixture.detectChanges() to ensure the component
    //  is initialized properly and to optimize
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


