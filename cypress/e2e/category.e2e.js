import loginPage from "../support/page/login"

describe('Category test suite', () => {
  const login = new loginPage();
  
  beforeEach(() => {
      login.loginKasiraja('samplexx@ex.com','123adsfadf@');       
  });

it('add new category with valid data, should contain url /categories (Positive Case)', ()=>{
  cy.get('[href="/categories"] > .css-ewi1jp').click()
  cy.get('.css-1piskbq').click()
  cy.get('#nama').type('Minuman bersoda')
  cy.get('#deskripsi').type('minuman bersoda indodrink')
  cy.get('.chakra-button').click()
  cy.url().should('include', '/categories')
  cy.wait(2000)
  
})    

it('add new category with empty name (Negative Case)', ()=>{
  cy.get('[href="/categories"] > .css-ewi1jp').click()
  cy.get('.css-1piskbq').click()
  cy.get('#deskripsi').type('minuman bersoda indodrink')
  cy.get('.chakra-button').click()
  cy.get('.chakra-alert').should('contain','"name" is not allowed to be empty')
  cy.wait(2000)
})   
})