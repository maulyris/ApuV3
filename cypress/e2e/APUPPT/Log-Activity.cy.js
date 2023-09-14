import LoginPage from "../../Pages/loginPage"
import LogoutPage from "../../Pages/LogoutPage"
import MenuElement from "../../Pages/Menu"
import LogActivityPage from "../../Pages/LogActivity"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let LogActivity = new LogActivityPage



describe ('Menu Lof Activity', () => {

    before('Link Visit', () => {
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Log Activity List', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickLogActivity()
        cy.wait(4000)
        LogActivity.InputLogAction('Login')
        LogActivity.InputLogEvent('Login')
        LogActivity.InputCreatedBy('superuser')
        LogActivity.InputCreatedAt('2023-02-21 10:28:01')
        LogActivity.InputLogIPAdress('103.78.81.146')
        cy.wait(4000)
        LogActivity.ClickExportButton()
    })

})