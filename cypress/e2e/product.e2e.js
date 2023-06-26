import loginPage from "../support/page/login"

describe('Product test suite', () => {
  const login = new loginPage();
  
  beforeEach(() => {
      login.loginKasiraja('samplexx@ex.com','123adsfadf@');       
  });

it('add new product with valid data, should contain url /products (Positive Case)', ()=>{
    cy.get('[href="/products"] > .css-ewi1jp').click()
    cy.get('.css-1piskbq').click()
    cy.get('#kode').clear()
    cy.get('#kode').type('MIN001')
    cy.get('#nama').type('Tebs')
    cy.get('#deskripsi').type('Teh bersoda')
    cy.get('#harga\\ beli').type('5000')
    cy.get('#harga\\ jual').type('8000')
    cy.get('#stok').type('50')
    cy.get('#kategori').click()
    cy.contains('Minuman bersoda').click()
    cy.get('.chakra-button').click()
    cy.url().should('include', '/products')
    cy.wait(3000)
})    

it('add new product with empty name (Negative Case)', ()=>{
    cy.get('[href="/products"] > .css-ewi1jp').click()
    cy.get('.css-1piskbq').click()
    cy.get('#kode').clear()
    cy.get('#kode').type('MIN001')
    cy.get('#deskripsi').type('Teh bersoda')
    cy.get('#harga\\ beli').type('5000')
    cy.get('#harga\\ jual').type('8000')
    cy.get('#stok').type('50')
    cy.get('#kategori').click()
    cy.contains('Minuman bersoda').click()
    cy.get('.chakra-button').click()
    cy.url().should('include', '/products/create')
    cy.get('.chakra-alert').should('contain','"name" is not allowed to be empty')
    cy.wait(3000)
})  

it('add new product with price < cost (Negative Case)', ()=>{
    cy.get('[href="/products"] > .css-ewi1jp').click()
    cy.get('.css-1piskbq').click()
    cy.get('#kode').clear()
    cy.get('#kode').type('MIN001')
    cy.get('#nama').type('Tebs')
    cy.get('#deskripsi').type('Teh bersoda')
    cy.get('#harga\\ beli').type('5000')
    cy.get('#harga\\ jual').type('1000')
    cy.get('#stok').type('50')
    cy.get('#kategori').click()
    cy.contains('Minuman bersoda').click()
    cy.get('.chakra-button').click()
    cy.url().should('include', '/products/create')
    cy.get('.chakra-alert').should('contain','"price" must be greater than ref:cost')
    cy.wait(3000)
})  
})