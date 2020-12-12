let movies;    // List of movies from TMDB
let searchWord = 'fat'

describe("Search Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/search/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&query=${searchWord}`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/search")
  })

  describe("Base test", () => {
    it("displays page", () => {
      cy.get("#root > div > div > div > span > span > input").should('exist')
      cy.get("#root > div > div > div > span > span > span > button").should('exist')
    });
  })

  describe("Search", () => {

    it("should not display movies without word", () => {
      cy.get("#root > div > div > div > span > span > span > button").click()
      cy.wait(3000)
      cy.get("#root > div > div > div > div").children('div').should('not.exist')
    })

    it("should display movies", () => {
      cy.get("#root > div > div > div > span > span > input").type(searchWord)
      cy.get("#root > div > div > div > span > span > span > button").click()
      cy.wait(3000)
      cy.get("#root > div > div > div > div").children('div').should('exist')
      cy.get("#root > div > div > div > div > div").each(($card, index) => {
        cy.wrap($card)
          .find(".ant-card-meta-title")
          .should("have.text", movies[index].title);
      });
    })

    it("link to detail page", () => {
      cy.get("#root > div > div > div > span > span > input").type(searchWord)
      cy.get("#root > div > div > div > span > span > span > button").click()
      cy.wait(3000)
      cy.get("#root > div > div > div > div > div:nth-child(1) > a").click()
      cy.wait(3000)
      cy.url().should('include',`movies/${movies[0].id}`)
    })
  })

})

