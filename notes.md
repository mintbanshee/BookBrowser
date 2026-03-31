
// here I will keep track of all the changes made 
// I have left comments in the code to explain my changes

~*~*~*~*~*~*~*~*~*~*~*~*~*~*
    Future Improvements
~*~*~*~*~*~*~*~*~*~*~*~*~*~*

- authentication checks (user specific like a real site)
- make a PHP database for it
- make that PHP database an API for it
- more tests
    * getBookById
    * postBook
    * putBook
    * deleteBook

~*~*~*~*~*~*~*~*~*~*~*~*~*~*
        Little Fixes
~*~*~*~*~*~*~*~*~*~*~*~*~*~*

- fixed component .spec imports to ensure I am importing the correct name
  * example: Book -> BookService, BookList -> BookListComponent

- in my test additions I added an import HttpClientTestingModule
  * it is deprecated so I changed it to
    provideHttpClientTesting

- cleaning up imports, removing any that were unused 

~*~*~*~*~*~*~*~*~*~*~*~*~*~*
          Upgrades
~*~*~*~*~*~*~*~*~*~*~*~*~*~*

- upgraded from 
      await fixture.whenStable() 
      to 
      fixture.detectChanges()

- added provideHttpClient

~*~*~*~*~*~*~*~*~*~*~*~*~*~*
          Testing
~*~*~*~*~*~*~*~*~*~*~*~*~*~*

- ran ng test
    * 6 errors
        - component uses router but .spec does not have router
- fix:
    * added import { provideRouter } to the .spec files

- added HttpTestingController
- implemented afterEach with httpMock.verify

- created mockBooks array to simulate API response
- subscribed to getBooks to access return data
- verified:
    * correct URL
    * request method is GET
    * returned data matches expectations
- used req.flush(mockBooks) to simulate backend response 


~*~*~*~*~*~*~*~*~*~*~*~*~*~*
        Observations
~*~*~*~*~*~*~*~*~*~*~*~*~*~*

- observables require subscribe to access data
- toBeTruthy is not enough for meaningful tests
- HttpTestingController lets us:
    * intercept requests
    * verify method & URL
    * use mock responses
- there is a difference between returning an Observable and actual data

