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
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        })
        cy.fixture("Profile_Customer.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit('https://apuppt.jiarsi.com/dev-3.1/')
        Login.Inputusername('sit.spv.1')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })


    it('Profile Customer Page', () => {
        cy.xpath('//h2[normalize-space()="Caution"]').should('be.visible')
        cy.wait(4000)
        Menu.ClickCustomer()
        Menu.ClickCustomerProfile()
        //Menu.ClickProfileCustomer()
        cy.wait(6000)
//SEARCHING PARAMETER
        // ProfileCustomer.InputOpeningDate(APUPPT.OpeningDate)
        // cy.wait(10000)
        ProfileCustomer.InputId(APUPPT.Id)
        cy.wait(30000)
        ProfileCustomer. InputFullName(APUPPT.FullName)
        cy.wait(20000)
        // ProfileCustomer.InputBranchName().select(APUPPT.BranchName)
        // cy.wait(10000)
        // ProfileCustomer.InputBankType.select(APUPPT.BankType)
        // cy.wait(10000)
        // ProfileCustomer.InputCustomerTypeDesc(APUPPT.CustomerTypeDesc)
        // cy.wait(10000)
        //ProfileCustomer.InputCIFCreated(APUPPT.CIFCreated)
        //cy.wait(10000)
        // ProfileCustomer.InputStatus().select(APUPPT.Status1)
        // cy.wait(10000)
        // ProfileCustomer.InputIdentityNumber(APUPPT.IdentityNumber)
        // cy.wait(10000)
        //ProfileCustomer.InputOccupation(APUPPT.Occupation)
        //cy.wait(10000)
        // ProfileCustomer.InputTypeRisk().select(APUPPT.TypeRisk1)
        // cy.wait(10000)
        ProfileCustomer.ClickDetailCustomer()
        cy.wait(10000)

        
        // ProfileCustomer.InputBrachCode(APUPPT.BranchCode)
        // cy.wait(10000)
        
        // ProfileCustomer.InputRBACode(APUPPT.RBACode)
        // cy.wait(10000)
        // ProfileCustomer.InputRBADesc(APUPPT.RBADesc)
        // cy.wait(10000)
        
        
        // ProfileCustomer.InputAddress(APUPPT.Address)
        // cy.wait(10000)
        // ProfileCustomer.ClickRBAButton()
        // cy.wait(4000)
        // ProfileCustomer.ClickIncomeRBA()
        // ProfileCustomer.ClickProductRBA()
        // ProfileCustomer.ClickCustomerSuspectRBA()
        // ProfileCustomer.ClickIdentityRBA()
        // ProfileCustomer.ClickOccupationRBA()
        // ProfileCustomer.ClickTownCountryRBA()
        // ProfileCustomer.ClickLOBRBA()
        // ProfileCustomer.ClickSDBRBA()
        // ProfileCustomer.ClickSourceOfIncomeRBA()
        // ProfileCustomer.ClickDeliveryChannelRBAn()
        // ProfileCustomer.ClickRBAFinal()
        // cy.wait(4000)
        // ProfileCustomer.ClickCloseRBA()
        // cy.wait(4000)
        
        // ProfileCustomer.ClickCloseButton()
        // cy.wait(4000)
        // ProfileCustomer.ClickPrintReport()
        // ProfileCustomer.ClickExportButton()
        // ProfileCustomer.ClickBranchExport()
        // ProfileCustomer.InputValueData(APUPPT.BranchExport)
        // ProfileCustomer.ClickCustomerTypeExport()
        // ProfileCustomer.InputValueData(APUPPT.CustomerTypeExport)
        // ProfileCustomer.ClickRiskTypeExport()
        // ProfileCustomer.InputValueData(APUPPT.RiskTypeExport)
        // ProfileCustomer.ClickBankTypeExport()
        // ProfileCustomer.InputValueData(APUPPT.BankTypeExport)
        // ProfileCustomer.ClickSaveExport()
        // cy.wait(4000)
        // Logout.ClickAvatarLogout()
        // Logout.ClickButtonLogout()
    })
})