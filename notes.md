
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

- added provideHttpClient, withFetch 
    * the withFetch makes it run smoothly with SSR 

- created truncateText pipe
    * shortens book descriptions to 100 characters + ...
    * prevent UI being overwhelmed
    * allow consistent display

- added description (with truncateText:100) to book list
    * improved UX
    * styled italic and smaller text for visual hierarchy 

- updated Angular dependencies to fix version conflicts
    * ng update @angular/core @angular/cli
    * needed this update to install SSR because of dependency mismatch
    * fixed ERESOLVE errors during the SSR installation
    * used --allow-dirty because Angular CLI had false "repo not clean" detected

- installed Angular Server Side Rendering
    * ng add @angular/ssr
    * updated project structure with server files

- added book cover images to book-list and book-detail
- added image path to add and edit 
    * images/DemoCover.png is the default cover 

~*~*~*~*~*~*~*~*~*~*~*~*~*~*
          SSR Fixes
~*~*~*~*~*~*~*~*~*~*~*~*~*~*

- resolved "document is not defined" error
    * caused by browser-only DOM access during SSR
    * wrapped document usage in isPlatformBrowser checks

- guarded browser-only APIs
    * document
    * localStorage
    * ensured they only run in browser environment

- updated AuthService
    * wrapped localStorage access in isPlatformBrowser
    * ensured signals still update even when not in browser

- removed Bootstrap JS dependency in BookDetail
    * bootstrap.Modal caused SSR failure due to document usage
    * removed modal instance logic
    * kept manual backdrop cleanup and navigation

- updated SSR route configuration
    * changed RenderMode from Prerender to Server
    * prevents need for getPrerenderParams on dynamic routes
    * allows routes like books/:id and books/edit/:id to work

- successfully ran production build with SSR enabled

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
- SSR does not like browser-only APIs
- libraries that rely on the DOM might break SSR
- SSR requires separation of UI and logic
- prerendering does not work with dynamic route parameters unless defined 
- Angular CLI might give a false repo not clean error
    * need to use --allow-dirty to continue with updates
    * this also includes after git add, commit, push and git clean -fd 
    

