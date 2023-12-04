import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import ProfileConductor from "../../../Pages/ProfileConductor"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let Conductor = new ProfileConductor


describe('Conductor Profile',()=> {
    let APUPPT;

    before('Login',()=> {
        cy.fixture("Profile_Conductor.json").then((data)=> {APUPPT=data;})
        cy.visit('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
        cy.xpath('//a[text()="Visualization Dashboard"]').should('be.visible')
    })

    it('Conductor List', ()=> {
        Menu.ClickGeneralInfo()
        Menu.ClickProfile()
        Menu.ClickProfileConductor()
        cy.wait(4000)
//Conductor.SearchingReportDate('')
        Conductor.SearchingInsertDate(APUPPT.InsertDate)
        cy.wait(4000)
        Conductor.SearchingConductorTypeCode(APUPPT.ConductorTypeCode)
        cy.wait(4000)
        Conductor.SearchingConductorTypeDesc(APUPPT.ConductorType)
        cy.wait(4000)
        Conductor.SearchingConductorID(APUPPT.ConductorID)
        cy.wait(4000)
        Conductor.SearchingConductorName(APUPPT.ConductorName)
        cy.wait(4000)
        // Conductor.SearchingBranchCode('')
        // Conductor.SearchingBranchDesc('')
        Conductor.SearchingBankDesc(APUPPT.BankType)
        cy.wait(4000)
        Conductor.ClickButtonViewDetail()
        cy.wait(4000)
        Conductor.ClickCloseButton()
        Conductor.ClickButtonViewDetail()
        cy.wait(4000)
        Conductor.ClickXCloseButton()
        Conductor.ClickExportButton()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })
})