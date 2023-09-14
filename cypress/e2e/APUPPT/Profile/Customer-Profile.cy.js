import LoginPage from "../../../Pages/loginPage"
import MenuElement from "../../../Pages/Menu"
import LogoutPage from "../../../Pages/LogoutPage"
import CustomerProfile from "../../../Pages/ProfileCustomer"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let ProfileCustomer = new CustomerProfile


describe('Profile Account', ()=>{

    let APUPPT;

    before ('Link APUPPT V5',() => {
        cy.fixture("Profile_Customer.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })


    it('Profile Customer Page', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        cy.wait(4000)
        Menu.ClickGeneralInfo()
        Menu.ClickProfile()
        Menu.ClickProfileCustomer()
        cy.wait(6000)
//SEARCHING PARAMETER
        ProfileCustomer.InputOpeningDate(APUPPT.OpeningDate)
        cy.wait(10000)
        ProfileCustomer.InputCustomerID(APUPPT.CustomerID)
        cy.wait(10000)
        ProfileCustomer.InputCustomerTypeDesc(APUPPT.CustomerTypeDesc)
        cy.wait(10000)
        ProfileCustomer.InputCustomerName(APUPPT.CustomerName)
        cy.wait(10000)
        ProfileCustomer.InputBrachCode(APUPPT.BranchCode)
        cy.wait(10000)
        ProfileCustomer.InputBranchName(APUPPT.BranchName)
        cy.wait(10000)
        ProfileCustomer.InputRBACode(APUPPT.RBACode)
        cy.wait(10000)
        ProfileCustomer.InputRBADesc(APUPPT.RBADesc)
        cy.wait(10000)
        ProfileCustomer.InputBankType(APUPPT.BankType)
        cy.wait(10000)
        ProfileCustomer.InputIdentityNumber(APUPPT.IdentityNumber)
        cy.wait(10000)
        ProfileCustomer.InputAddress(APUPPT.Address)
        cy.wait(10000)
        ProfileCustomer.ClickRBAButton()
        cy.wait(4000)
        ProfileCustomer.ClickIncomeRBA()
        ProfileCustomer.ClickProductRBA()
        ProfileCustomer.ClickCustomerSuspectRBA()
        ProfileCustomer.ClickIdentityRBA()
        ProfileCustomer.ClickOccupationRBA()
        ProfileCustomer.ClickTownCountryRBA()
        ProfileCustomer.ClickLOBRBA()
        ProfileCustomer.ClickSDBRBA()
        ProfileCustomer.ClickSourceOfIncomeRBA()
        ProfileCustomer.ClickDeliveryChannelRBAn()
        ProfileCustomer.ClickRBAFinal()
        cy.wait(4000)
        ProfileCustomer.ClickCloseRBA()
        cy.wait(4000)
        ProfileCustomer.ClickDetailCustomer()
        cy.wait(4000)
        ProfileCustomer.ClickCloseButton()
        cy.wait(4000)
        ProfileCustomer.ClickPrintReport()
        ProfileCustomer.ClickExportButton()
        ProfileCustomer.ClickBranchExport()
        ProfileCustomer.InputValueData(APUPPT.BranchExport)
        ProfileCustomer.ClickCustomerTypeExport()
        ProfileCustomer.InputValueData(APUPPT.CustomerTypeExport)
        ProfileCustomer.ClickRiskTypeExport()
        ProfileCustomer.InputValueData(APUPPT.RiskTypeExport)
        ProfileCustomer.ClickBankTypeExport()
        ProfileCustomer.InputValueData(APUPPT.BankTypeExport)
        ProfileCustomer.ClickSaveExport()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })
})