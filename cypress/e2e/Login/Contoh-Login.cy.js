describe('Menu login',()=>
{
beforeEach(('Visit link'),()=> {
    cy.visit('https://the-internet.herokuapp.com/login')
  })  

  it.only('Success', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('be.visible')
  })

  it('NoData', () => {
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('.radius').click()
    cy.get('#flash').should('be.visible','contain.text','Your username is invalid')
  })

  it('UsernameInvalid', () => {
    cy.get('#username').type('Joe')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('be.visible','countain.text','Your username is invalid')
  })

  it('WrongPassword', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('wrongpassword')
    cy.get('.radius').click()
    cy.get('#flash').should('be.visible','countain.text','Your password is invalid')
  })

  

})