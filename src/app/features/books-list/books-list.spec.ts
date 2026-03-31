import { ComponentFixture, TestBed } from '@angular/core/testing';
// added provideRouter to avoid nullInjector error when running tests
// because books-list uses router
import { provideRouter } from '@angular/router';
// fixed BookList to BooksListComponent to match the actual component name
import { BooksListComponent } from './books-list';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksListComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    // changed await fixture.whenStable() to fixture.detectChanges() to ensure the component
    //  is initialized properly and to optimize
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});