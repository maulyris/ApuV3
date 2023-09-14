import LoginPage from "../../../Pages/loginPage"
import MenuElement from "../../../Pages/Menu"
import LogoutPage from "../../../Pages/LogoutPage"
import ProfileManagementWealth from "../../../Pages/ProfileManagementWealth"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let WealthManagement = new ProfileManagementWealth


describe('Profile Wealth Management', ()=>{

    let APUPPT;

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

    it('Wealth Management List',()=> 
    {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickProfile()
        Menu.ClickProfileWealthManagement()
        cy.wait(4000)
        WealthManagement.SearchingReportDate('2023-01-14')
        //cy.wait(4000)
        WealthManagement.SearchingInsertDate('2023-01-18')
        //cy.wait(4000)
        WealthManagement.SearchingBankDesc('CONVENTIONAL')
        //cy.wait(4000)
        //WealthManagement.SearchingOpeningDate('')
        //cy.wait(4000)
        WealthManagement.SearchingCustomerID('110062863')
        WealthManagement.SearchingCustomerTypeDesc('CORPORATE')
        //cy.wait(4000)
        WealthManagement.SearchingCustomerName('NOVELL PHARMACEUTICAL LABORATORIES PT')
        WealthManagement.SearchingBranchCode('ID0010100')
        WealthManagement.SearchingBranchDesc('0100-CABANG UTAMA JAKA')
        cy.wait(4000)
        WealthManagement.SearchingWealthManagementID('CPD0909CL568177')
        WealthManagement.SearchingWealthManagementType('Corporate')
        cy.wait(4000)
        WealthManagement.ClickButtonViewDetail()
        cy.wait(4000)
        WealthManagement.ClickCloseButtonDetail()
        WealthManagement.ClickExportButton()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})