# Assignment 1 - ReactJS app.

Name: Yonghui Zhang

## Features.
 + Feature 1 - add a popular movie gallery on homepage
 + Feature 2 - add a login page to implement the function that people should login to see movie reviews
 + Feature 3 - add a search page to search movies and if moviecard is clicked,it will show details
 + Feature 4 - change ui on  using ant-design
 + Feature 5 - Use redux on login,search,judge if login 
 + Feature 6 - let button of upcoming page implement add to favourite

## Setup requirements (If required).

npm install 

## API Data Model
+ https://api.themoviedb.org/3/movie/popular? - get popular movies
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/authentication/token/new - create a new request token
+ https://api.themoviedb.org/3/authentication/session/new - create a session id
+ https://api.themoviedb.org/3/account - get account details
+ https://api.themoviedb.org/3/authentication/token/validate_with_login -validate the login 
+ https://api.themoviedb.org/3/search/movie - get searching movies
## App Design.

### Component catalogue (If required).

![][stories]

### UI Design.


![][LOGIN1]
>Shows Login funtion. Clicking the 'Login to Show Reviews' button will display login page.
![][LOGIN2]
>Clicking the 'LOGIN' button if username and password are correct,it will show movie reviews
![][Popular]
>Shows popular movies by scrolling pictures. 
![][Search1]
>Shows search page
![][Search2]
>After typing keyword sherlock,the page shows relavant movies 

## Routing.


+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/search(public) - dispalys the user's movies search
+ /reviews/:username&password(protected) -displays the full text of moview reviews


### Data hyperlinking.


![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

+Redux user redux to store user data https://cn.redux.js.org/docs/recipes/reducers/PrerequisiteConcepts.html
+Ant design: a react-ui https://ant.design/docs/react/introduce
---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Yonghui Zhang

## App Features.

+ Login page - Shows the validation. The Login button reveals an access to get movie reviews.

Tests: cypress/integration/login-page.spec.js 

![][LOGIN2]

+ Home page(image gallery):displays image gallery.

Tests: cypress/integration/home-page.spec.js 

![][Popular]

+ Search page:Show the search function.It should not display movies without word should.It should display movies.After clicking on the movie card,it should link to detail page.

![][Search2]


## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/organizations/39f0ad9d-edcf-462a-9b29-88c8cb9d59dc/projects

### Advanced Testing (If required).

+ cypress/integration/home-page.spec.js - test the image gallery.
+ cypress/integration/navigation.spec.js - test a onclick to search page.
+ cypress/integration/loginPage.js - test login process
+ cypress/integration/searchPage.js - test search process

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).

---------------------------------

[movieDetail]: ./Readme/public/movieDetail.png
[review]: ./Readme/public/review.png
[reviewLink]: ./Readme/public/reviewLink.png
[cardLink]: ./Readme/public/cardLink.png
[stories]: ./Readme/public/CATALOGUE.png
[LOGIN1]: ./Readme/public/LOGIN1.png
[LOGIN2]: ./Readme/public/LOGIN2.png
[Search1]: ./Readme/public/Search1.png
[Search2]: ./Readme/public/Search2.png
[Popular]: ./Readme/public/Popular.png