describe("Login Page ", () => {


  beforeEach(() => {
    cy.visit("/login")
  })

  describe("Base test", () => {
    it("displays page", () => {
      cy.get("#root > div > div > div > div > input").should('exist')
      cy.get("#root > div > div > div > div > span > input").should('exist')
      cy.get("#root > div > div > div > div > button").should('exist')
    });
  })

  describe("Login", () => {
    it("login wrong", () => {
      cy.get("#root > div > div > div > div > input").type('1123')
      cy.get("#root > div > div > div > div > span > input").type('1123')
      cy.get("#root > div > div > div > div > button").click()
      cy.url().should('include','/login')
    })

    it("should alert", () => {
      cy.get(".ant-message").should('not.exist')
      cy.get("#root > div > div > div > div > button").click()
      cy.get(".ant-message").should('exist')
    })

    it("login success", () => {
      cy.get("#root > div > div > div > div > input").type('maxcheung5259')
      cy.get("#root > div > div > div > div > span > input").type('19991017zyh')
      cy.get("#root > div > div > div > div > button").click()
      cy.wait(50000)
      cy.url().should('not.include','/login')
    })
  })

})

