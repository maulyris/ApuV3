import LoginPage from "../../Pages/loginPage"

let login = new LoginPage

describe('Menu Login',() =>
{
    beforeEach('Link APUPPT',()=>{
        cy.visit ('https://apuppt.jiarsi.com/dev-3.1/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        })
    })

    it('Invalid UserName', () =>{
        login.Inputusername('Testing12345')
        login.Inputpassword('Jiarsi1@')
        login.ClickButtonSignIn()
        cy.get('.alert').should('be.visible',{ timeout: 10000 })
    })

    it('Invalid Password', () =>{
        login.Inputusername('sit.spv.1')
        login.Inputpassword('Jiarsi1@@')
        login.ClickButtonSignIn()
        cy.get('.alert').should('be.visible',{ timeout: 10000 })
    })

    it.only('Invalid User and Password', () =>{
        login.Inputusername('sit.spvtest.1')
        login.Inputpassword('Jiarsi1@@')
        login.ClickButtonSignIn()
        cy.xpath('//div[@class="alert-text"][contains(text(), "User not found")]').should('exist'),{ timeout: 10000 };
    })

    it('Login With Inactive user', () =>{
        login.Inputusername('sit.spvtest.1')
        login.Inputpassword('Jiarsi1@@')
        login.ClickButtonSignIn()
        cy.get('.alert').should('be.visible',{ timeout: 10000 })
    })
    
    // it('Login With New User', () =>{
    //     cy.get('#floatingInput').type('testingsuperuser')
    //     cy.get('#password').type('Jiarsi1@')
    //     cy.get('#kt_login_signin_submit').click()
    //     //cy.get('.alert > .d-flex > span').should('be.visible','content.text','User Locked', { timeout: 10000 })
    // })

    for (let i = 0; i < 3; i++) {
        it('Wrong Password 3times',()=>{
                login.Inputusername('sit.spv.1')
                login.Inputpassword('Jiarsi1@')
                login.ClickButtonSignIn()
                cy.get('.alert').should('be.visible',{ timeout: 10000 })
        })
    }

    // it('Login With Locked User', () =>{
    //     login.Inputusername('userlocked')
    //     login.Inputpassword('Jiarsi1@')
    //     cy.get('#kt_login_signin_submit').click()
    //     cy.xpath('.alert > .d-flex > span').should('be.visible','content.text','User Locked', { timeout: 10000 })
    // })

    it('Valid Data',()=>{
        login.Inputusername('sit.spv.1')
        login.Inputpassword('Jiarsi1@')
        login.ClickButtonSignIn()
        cy.xpath('//h2[normalize-space()="Caution"]').should('be.visible')
    })
})