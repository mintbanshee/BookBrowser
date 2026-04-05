# 📚 Book Browser – Angular Application

A responsive Angular application that allows users to browse, search, and manage a collection of books.  
This project demonstrates modern Angular development concepts including signals for state management, HTTP services for data access, routing for navigation between views, and testing practices.

The application simulates a backend using JSON Server, allowing full CRUD (Create, Read, Update, Delete) operations on books.

This project was later expanded to include debugging, testing improvements, and Server Side Rendering (SSR), showcasing a deeper understanding of Angular architecture and real-world problem solving.

I have updated some areas of this repo to contain both the original and the updated details together (for example, the Features section) while other areas I separate them as the original version which was Angular Assignment 3 (marked as assignment 3) and the updates which was Angular Assignment 5 (marked as assignment 5).


## ✨ Features

- Browse a library of books
- View detailed information for each book
- Add new books to the collection
- Edit existing books
- Delete books with confirmation modal
- Mark books as favourites
- Filter by favourites
- Live search by title, author, or genre
- Alphabetical sorting of books
- Dynamic book counter
- Responsive Bootstrap card layout
- Truncated book descriptions using a custom pipe for improved readability
- Book cover image support with editable image paths
- Angular testing setup with passing unit tests
- Debugged and resolved dependency injection issues in test files
- Server Side Rendering (SSR) support with browser-safe guards

## 🧠 Technologies Used

- Angular
- Angular Signals
- TypeScript
- Angular Routing
- Angular HttpClient
- RxJS
- Angular Testing Utilities
- HttpTestingController
- Angular Server Side Rendering (SSR)
- JSON Server (simulated backend)
- Bootstrap 5
- Node.js
- Git & GitHub

## 📸 Assets List

New With The Update: - (assignment 5)
- screen recording of updated application
- screenshots of issues and fixes


The Original Application: - (assignment 3)
- Book List
- Search Results
- Favourites Filter
- Book Details
- Add Book
- Edit Book
- Delete Confirmation

---

# 📦 Assignment 3 – Original Application

## 📦 Assignment Requirements

The project was developed to meet the requirements for Angular Development – Assignment 3.
Required functionality included:
- Create a new Angular project connected to a GitHub repository
- Implement a simulated backend using JSON Server or HttpClientInMemoryWebApiModule
- Create a BookService using Angular HttpClient to perform CRUD operations
- Manage application state using Angular Signals
- Implement routing with at least two views:
    /books – list of all books
    /books/:id – detail view of a single book
- Ensure the code is properly commented
- Commit and push the project to GitHub

## ✅ Requirements Met

This project successfully implements all required assignment features:

- ✔ Angular project connected to GitHub
- ✔ JSON Server used as a simulated backend
- ✔ BookService communicates with backend using HttpClient
- ✔ Full CRUD operations implemented
- ✔ Angular Signals used for application state
- ✔ Routing implemented for /books and /books/:id
- ✔ Code properly structured and commented
- ✔ Working and fully functional application

## 🌱 Additional Features Implemented

Beyond the core requirements, several additional features were added to improve usability and user experience:

- ⭐ Favourite book toggle
- ⭐ All | Favourites filter
- ⭐ Live search functionality
- ⭐ Alphabetical sorting of books
- ⭐ Dynamic book counter
- ⭐ Bootstrap styled UI
- ⭐ Delete confirmation modal
- ⭐ Optimistic UI updates for favourites

These features extend the assignment into a more complete and user-friendly application.

---

# 🧪 Assignment 5 – Enhancements & Debugging

## 🌿 Enhancements & Debugging Journey

This project was further expanded to explore testing, debugging workflows, and Angular Server Side Rendering (SSR). The following highlights key issues encountered and how they were resolved.

## 📦 Assignment Requirements 

This assignment (Angular Assignment 5) focuses on optimizing our code, little fixes, upgrades and additions as well we testing, debugging, Server Side Rendering and more.
- choose an existing Angular assignment project to optimize
- update the repo and readme to show improvements
- reflect and refactor
    - clean up, improve, update and explain
- include a pipe
- ensure application uses Angular routing
- application must use use an API or JSON
- must include a form
- debug and test
- show issues and fixes
- include an AI use section explaining how we used AI and what we learned
- include images in the application
- application must use RxJS
- must have at least 1 component
- must have at least 1 service
- must run `ng build --configuration production`
- install SSR
- must use Angular Material or Bootstrap
- make it look good
- make sure everything works

## ✅ Requirements Met

- ✔ I chose this assignment
- ✔ Updated repo & readme
- ✔ Added truncateText pipe to improve UI readability
- ✔ BookBrowser uses Angular routing
- ✔ I use db.json as database for this assignment
- ✔ Add book and edit book both use a reactive form
- ✔ Integrated book cover images with editable image paths
- ✔ Components: add, edit, list and detail
- ✔ Services: book and auth
    - auth is in progress. Login and Signup are up and running but there is no auth checks, dashboard or individual book lists yet
- ✔ Updated Angular dependencies to resolve SSR installation conflicts
- ✔ Implemented `withFetch()` for improved SSR compatibility
- ✔ Cleaned up imports and modernized testing setup
- ✔ The following screenshots demonstrate other requirements met

## 🧪 Testing & Debugging

### ❌ Initial Test Failures
<img width="1530" height="1075" alt="Test6Errors" src="https://github.com/user-attachments/assets/da1e8206-c5e0-482f-88ce-8dc5e8da7db4" />


- Multiple failing tests
- Missing router dependencies in spec files

#### 🔧 Fix: Router Injection
<img width="1126" height="800" alt="provideRouter" src="https://github.com/user-attachments/assets/fca764ff-f524-4037-9fd9-c199461fcc54" />


- Added `provideRouter([])` to test configuration
- Resolved dependency injection errors in standalone components

#### ✅ Result
<img width="1595" height="1073" alt="TestNoErrors" src="https://github.com/user-attachments/assets/8f961571-1f2f-42d8-81a3-2ffc06c5b79d" />


- All tests running successfully after fixes

---

### 🌐 Server Side Rendering (SSR)

#### ❌ SSR Error
<img width="1213" height="893" alt="ExtractingRoutesIssue" src="https://github.com/user-attachments/assets/d78ec3a3-705b-4910-be89-6691b8fb6685" />


- Error: `document is not defined`
- Caused by browser-only APIs running during server-side rendering

#### 🔧 Fix: Platform Guard
<img width="1131" height="801" alt="isPlatformBrowser" src="https://github.com/user-attachments/assets/3cb0cfcd-8bf6-4f8b-8564-6196116c286d" />


- Wrapped DOM-related logic using `isPlatformBrowser`
- Prevented server-side crashes

#### ✅ Result
<img width="1219" height="998" alt="SSRserve" src="https://github.com/user-attachments/assets/9c0603d7-3203-478e-aa81-ae5efb3b5058" />

- SSR successfully running alongside JSON Server
- Application builds and serves correctly

---

## 🤖 Use of AI in Development (Luna - ChatGPT)

AI was used as a learning assistant and debugging partner, rather than as a tool to generate full solutions.
Throughout development, I used AI to:

- Luna helped create this README and select which of my MANY screenshots I should use 
- understand errors and debug issues
    - help interpret error messages
    - identify why some errors were happening
    - break down complex problems
- guide me in fixes but don't do them for me
    - suggest approaches
    - corrected me if I implemented fixes wrong or used an incorrect fix
    - verified success and cried alongside me during failures
- support testing setup
    - explained Angular testing
    - clarified HttpTestingController and mock data
    - helped with troubleshooting and helped me understand dependency injection issues
- Assisted with SSR setup
    - helped identify why SSR builds were failing
    - guided me through troubleshooting DOM and prerendering issues
- Feature and UI Suggestions
    - suggested truncating the description for my pipe requirement
    - provided some readability options
    - answered "How do I do ____ with bootstrap?" questions for me since I am still learning Bootstrap

## 🧠 What I Learned from Luna's Guidance

- How to interpret Angular errors instead of guessing fixes
- The importance of understanding why a solution works
- How SSR changes how code executes
- That browser-only APIs must be handled carefully
- How Angular testing depends on proper dependency injection
- How to continue using AI as a tool for guidance or as an assistant
    - I have strict rules on showing me the code and doing the work for me
    - I won't learn if I don't do the work myself so Luna is my guide and assistant

## 👩‍💻 Author

Alexandria McQueen
- Web & App Development Student
- GitHub: https://github.com/mintbanshee
- Portfolio: https://mintbanshee.dev 

## 🌿 Final Notes

This project demonstrates the integration of Angular’s modern features such as signals, services, routing, and HTTP communication within a small but fully functional application. It highlights both technical implementation and user-focused design decisions.

---

## 🎬 Screen Recording of Updated Application

https://github.com/user-attachments/assets/f20fec35-ba14-4da9-aeac-0f41ca6c42b3

---

## 📸 Screenshots (Before Update) 

<img width="1606" height="922" alt="BookList" src="https://github.com/user-attachments/assets/0e01abb8-3f11-4cb4-ad76-bb2ba0117722" />

<img width="1605" height="922" alt="SearchSuccess" src="https://github.com/user-attachments/assets/78234538-bab9-4bf3-93df-40e552bd33fe" />

<img width="1602" height="810" alt="SearchFail" src="https://github.com/user-attachments/assets/5ec7d379-0298-4750-9b31-c461917e547e" />

<img width="1606" height="906" alt="FavouritesOnly" src="https://github.com/user-attachments/assets/d15c3ff3-fe59-4464-b71f-83b59ac51eff" />

---

<img width="1605" height="916" alt="AddBook" src="https://github.com/user-attachments/assets/9c85ae2c-d4ec-4c3b-9e7f-ead09b564496" />

<img width="1612" height="394" alt="NewBookInDB" src="https://github.com/user-attachments/assets/08d44731-228b-4571-b142-cce4d4e3e822" />

<img width="1606" height="921" alt="BookDetails" src="https://github.com/user-attachments/assets/ba058416-1864-4ad6-8fe6-5f0d4432063e" />

<img width="1598" height="923" alt="EditBook" src="https://github.com/user-attachments/assets/6297c19d-617e-4309-b2f8-25f11aaa93ff" />

<img width="1602" height="908" alt="DeleteBook" src="https://github.com/user-attachments/assets/eafc7933-1d69-4048-8c8f-5ad3a133bc7d" />









