describe('Menu login',()=>
{
beforeEach(('Visit link'),()=> {
    cy.visit('https://the-internet.herokuapp.com/login')
  })  

  it.only('NoData', () => {
    cy.get('#username').type('monica')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('be.visible','countain.text','Your username is invalid')
  })

  it.skip('UsernameInvalid', () => {
    cy.get('#username').type('monica')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('be.visible','countain.text','Your username is invalid')
  })

  it('WrongPassword', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('123456!')
    cy.get('.radius').click()
    cy.get('#flash').should('be.visible','countain.text','Your password is invalid')
  })

  it('Succes', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('be.visible')
  })

})