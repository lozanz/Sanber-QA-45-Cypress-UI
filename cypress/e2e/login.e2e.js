describe("Login Test", ()=>{
    const email ='samplexx@ex.com';
    const password = '123adsfadf@';
    
    it('user login with invalid email', ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type("samplexx@ex.co")
        cy.get('#password').type(password)
        cy.get('[type = "submit"]').click()
        cy.get('[role = "alert"]').should('contain','Kredensial yang Anda berikan salah');
        cy.wait(2000)
    })

    it('user login with invalid password', ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type(email)
        cy.get('#password').type("1234")
        cy.get('[type = "submit"]').click()
        cy.get('[role = "alert"]').should('contain','Kredensial yang Anda berikan salah');
        cy.wait(2000)
    })

    it('user login without email', ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#password').type(password)
        cy.get('[type = "submit"]').click()
        cy.get('[role = "alert"]').should('contain','"email" is not allowed to be empty');
        cy.wait(2000)
    })

    it('user login without password', ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type(email)
        cy.get('[type = "submit"]').click()
        cy.get('[role = "alert"]').should('contain','"password" is not allowed to be empty');
        cy.wait(2000)
    })

    it('user login with valid data', ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('[type = "submit"]').click()
        cy.url().should('include','/dashboard')
        cy.contains("kasirAja")
        cy.wait(2000)
    })
})