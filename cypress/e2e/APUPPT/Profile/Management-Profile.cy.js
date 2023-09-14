import filterTests from "../../../support/filterTest"
import LoginPage from "../../../Pages/loginPage"
import MenuElement from "../../../Pages/Menu"
import LogoutPage from "../../../Pages/LogoutPage"
import ProfileManagement from "../../../Pages/ProfileManagement"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let Management = new ProfileManagement

filterTests(['Management'],() =>{

    let APUPPT;

describe('Profile Management', ()=>{

    before ('Link APUPPT V5',() => {
        cy.fixture("Profile_Management.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser3')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Mangement List',()=> 
    {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickProfile()
        Menu.ClickProfileManagement()
        cy.wait(4000)
        Management.SearchingManagementId(APUPPT.ManagementId)
        cy.wait(4000)
        Management.SearchingManagementName(APUPPT.ManagementName)
        cy.wait(4000)
        Management.SearchingBankType(APUPPT.BankType)
        cy.wait(4000)
        Management.SearchingCustomerID(APUPPT.CustomerID)
        cy.wait(4000)
        Management.SearchingCustomerType(APUPPT.CustomerType)
        cy.wait(4000)
        Management.SearchingCustomerName(APUPPT.CustomerName)
        cy.wait(4000)
        Management.SearchingBranchCode(APUPPT.BranchCode)
        cy.wait(4000)
        Management.SearchingBranchName(APUPPT.BranchName)
        cy.wait(4000)
        Management.SearchingJobPosition(APUPPT.JobPosition)
        cy.wait(4000)
        cy.xpath('//button[@title="Risk Based Approach"]').scrollIntoView()
        cy.wait(4000)
        Management.ClickButtonRBA()
        cy.wait(4000)
        cy.get('.modal_rba > .modal-dialog > .modal-content > .modal-header').should('be.visible','content.text','DETAIL RBA CUSTOMER ').click()
        Management.ClickCloseRBA()
        cy.wait(4000)
        Management.ClickButtonViewDetail()
        cy.wait(4000)
        Management.ClickCloseDetail()
        Management.ClickExportButton()
        cy.wait(4000)
        Management.ClickButtonPrintReport()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})

})