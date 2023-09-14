import LoginPage from "../../Pages/loginPage"

let login = new LoginPage

describe('Menu Login',() =>
{
    beforeEach('Link APUPPT',()=>{
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
    })

    it.only('Invalid UserName', () =>{
        login.Inputusername('Testing12345')
        login.Inputpassword('Jiarsi1@')
        cy.get('#kt_login_signin_submit').click()
        cy.get('.alert > .d-flex > span').should('be.visible','content.text','User not found !', { timeout: 10000 })
    })

    it('Invalid Password', () =>{
        cy.get('#floatingInput').type('SPV.KP.2')
        cy.get('#password').type('Jiarsi12345')
        cy.get('#kt_login_signin_submit').click()
        cy.xpath('//span[contains(text()="Password salah, Anda memiliki")]').should('be.visible','content.text','Password salah, Anda memiliki 2 kesempatan lagi!',{ timeout: 10000 })
    })

    it('Invalid User and Password', () =>{
        cy.get('#floatingInput').type('testingtesting123')
        cy.get('#password').type('Jiarsi121238494')
        cy.get('#kt_login_signin_submit').click()
        cy.get('.alert > .d-flex > span').should('be.visible','content.text','User not found !', { timeout: 10000 })
    })

    it('Login With Inactive user', () =>{
        cy.get('#floatingInput').type('testingsuperuser')
        cy.get('#password').type('Jiarsi1@')
        cy.get('#kt_login_signin_submit').click()
        cy.get('.alert > .d-flex > span').should('be.visible','content.text','User Is Inactive', { timeout: 10000 })
    })
    
    it('Login With New User', () =>{
        cy.get('#floatingInput').type('testingsuperuser')
        cy.get('#password').type('Jiarsi1@')
        cy.get('#kt_login_signin_submit').click()
        //cy.get('.alert > .d-flex > span').should('be.visible','content.text','User Locked', { timeout: 10000 })
    })

    for (let i = 0; i < 3; i++) {
        it('Wrong Password 3times',()=>{
                cy.get('#floatingInput').type('superuser1')
                cy.get('#password').type('Jiarsi123')
                cy.get('#kt_login_signin_submit').click()
                cy.get('.alert > .d-flex > span').should('be.visible','content.text','User Is Locked !', { timeout: 10000 })
        })
    }

    it('Login With Locked User', () =>{
        cy.get('#floatingInput').type('')
        cy.get('#password').type('')
        cy.get('#kt_login_signin_submit').click()
        cy.get('.alert > .d-flex > span').should('be.visible','content.text','User Locked', { timeout: 10000 })
    })

    it('Valid Data',()=>{
        cy.get('#floatingInput').type('superuser2')
        cy.get('#password').type('Jiarsi1@')
        cy.get('#kt_login_signin_submit').click()
        cy.xpath('//a[text()="Visualization Dashboard"]').should('be.visible','content.text','Visualization Dashboard', { timeout: 10000 })
    })
})