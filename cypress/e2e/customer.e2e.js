import loginPage from "../support/page/login"

describe('Customer test suite', () => {
  const login = new loginPage();
  
  beforeEach(() => {
      login.loginKasiraja('samplexx@ex.com','123adsfadf@');       
  });

it('add new customer with valid data, should contain url /customers (Positive Case)', ()=>{
    cy.get(':nth-child(9) > .css-ewi1jp').click()
    cy.get('.css-1piskbq').click()
    cy.get('#nama').type('Fitri C. H.')
    cy.get('[id = "no.hp"]').type('0812345678')
    cy.get('#alamat').type('Padang')
    cy.get('#keterangan').type('Pelanggan VVIP')
    cy.get('.chakra-button').click()
    cy.url().should('include', '/customers')
    cy.wait(2000)
})    

it('add new customer with empty name (Negative Case)', ()=>{
    cy.get(':nth-child(9) > .css-ewi1jp').click()
    cy.get('.css-1piskbq').click()
    cy.get('[id = "no.hp"]').type('0812345678')
    cy.get('#alamat').type('Padang')
    cy.get('#keterangan').type('Pelanggan VVIP')
    cy.get('.chakra-button').click()
    cy.url().should('include', '/customers/create')
    cy.get('.chakra-alert').should('contain','"name" is not allowed to be empty')
    cy.wait(2000)
})    

it('add new customer with invalid phone (Negative Case)', ()=>{
    cy.get(':nth-child(9) > .css-ewi1jp').click()
    cy.get('.css-1piskbq').click()
    cy.get('#nama').type('Fitri C. H.')
    cy.get('[id = "no.hp"]').type('ipit')
    cy.get('#alamat').type('Padang')
    cy.get('#keterangan').type('Pelanggan VVIP')
    cy.get('.chakra-button').click()
    cy.url().should('include', '/customers/create')
    cy.get('.chakra-alert').should('contain','"phone" must be a number')
    cy.wait(2000)
})    
})