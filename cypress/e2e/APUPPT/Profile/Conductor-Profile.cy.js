import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import ProfileConductor from "../../../Pages/ProfileConductor"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let Conductor = new ProfileConductor


describe('Conductor Profile',()=> {

    before('Login',()=> {
        cy.visit('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser3')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Conductor List', ()=> {
        Menu.ClickGeneralInfo()
        Menu.ClickProfile()
        Menu.ClickProfileConductor()
        cy.get('.breadcrumb > :nth-child(1) > .text-muted').
        should('be.visible','content.text','Visualization Dashboard')
        cy.wait(4000)
//Conductor.SearchingReportDate('')
        Conductor.SearchingInsertDate('2022-10-21')
        Conductor.SearchingConductorTypeCode('1')
        Conductor.SearchingConductorTypeDesc('INDIVIDUAL')
        // Conductor.SearchingConductorID('')
        // Conductor.SearchingConductorName('')
        // Conductor.SearchingBranchCode('')
        // Conductor.SearchingBranchDesc('')
        // Conductor.SearchingBankDesc('')
        Conductor.ClickButtonViewDetail()
        cy.wait(4000)
        Conductor.ClickCloseButton()
        Conductor.ClickExportButton()
        cy.wait(4000)
        Logout.ClickAvatarLogout
        Logout.ClickButtonLogout
        cy.wait(4000)
    })
})