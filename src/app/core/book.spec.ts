// added provideHttpClientTesting to set up for testing the HttpClient in BookService
// also added HttpTestingController to be able to mock HTTP requests in the tests to catch
// fake requests and inspect them
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';


// fixed from Book to BookService, as the test is for BookService and not Book
import { BookService } from './book';

describe('BookService', () => {
  let service: BookService;
  // set variable for the test controller
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withFetch()), provideHttpClientTesting()]
    });
    service = TestBed.inject(BookService);
    // injected the test controller
    httpMock = TestBed.inject(HttpTestingController);
  });
  // afterEach added to check for leftover HTTP requests
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  // added a test for getBooks to make sure it sends a GET request and
  // returns the book data I am asking for 
  it('should return books', () => {
    // added a mockBooks array to simulate a real response when getBooks is called
    // this lets me test the service without needing the backend 
    const mockBooks = [
      {
        id: '1',
        title: 'Test Book',
        author: 'Test Author',
        genre: 'Fantasy',
        description: 'A test book for unit testing',
        isFavorite: false
      }
    ];
    // make sure getBooks returns the mockBooks data when called
    // also check the http request
    service.getBooks().subscribe(books => {
      expect(books).toEqual(mockBooks);
    });
    const req = httpMock.expectOne('http://localhost:3000/books');
    expect(req.request.method).toBe('GET');
    // send the mockBooks data back as a fake server response
    req.flush(mockBooks);
  });
});
