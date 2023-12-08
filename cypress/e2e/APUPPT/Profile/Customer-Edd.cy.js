import LoginPage from "../../../Pages/loginPage"
import MenuElement from "../../../Pages/Menu"
import LogoutPage from "../../../Pages/LogoutPage"
import CustomerEdd from "../../../Pages/CustomerEdd"

let Login = new LoginPage 
let Logout = new LogoutPage
let Menu = new MenuElement
let EddCustomer = new CustomerEdd


describe('Customer Edd', ()=>{

let APUPPT;
    
    before ('Link APUPPT V3',() => {
        cy.clearCookies()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        })

        cy.fixture("Customer_Edd.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit ('https://apuppt.jiarsi.com/dev-3.1/')
        Login.Inputusername('SPV001')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Customer Page', () => {
        cy.xpath('//h2[normalize-space()="Caution"]').should('be.visible')
        cy.wait(4000)
        Menu.ClickCustomer()
        cy.wait(6000)
        Menu.ClickCustomerEDD()
        cy.wait(6000)
        EddCustomer.InputBankType()
        cy.wait(4000)
        EddCustomer.InputSearchBankType(APUPPT.SearchBankType)
        cy.wait(6000)
        EddCustomer.InputTypeRisk()
        cy.wait(6000)
        EddCustomer.InputSearchTypeRisk(APUPPT.SearchTypeRisk)
        cy.wait(6000)
        EddCustomer.InputCustomerID(APUPPT.CustomerID)
        cy.wait(20000)
        EddCustomer.InputBranchName(APUPPT.BranchName)
        cy.wait(20000)
        EddCustomer.InputIdentityCardNumber(APUPPT.IdentityCardNumber)
        cy.wait(20000)
        EddCustomer.ClickButtonAction()
        cy.wait(6000)
        EddCustomer.ClickYes1()
        cy.wait(2000)
        EddCustomer.ClickYes2()
        cy.wait(2000)
        EddCustomer.ClickYes3()
        cy.wait(2000)
        EddCustomer.ClickYes4()
        cy.wait(2000)
        EddCustomer.ClickYes5()
        cy.wait(2000)
        EddCustomer.ClickYes6()
        cy.wait(2000)
        EddCustomer.ClickYes7()
        cy.wait(2000)
        EddCustomer.ClickYes8()
        cy.wait(2000)
        EddCustomer.ClickYes9()
        cy.wait(2000)
        EddCustomer.ClickYes10()
        cy.wait(2000) 
        EddCustomer.ClickYes11()
        cy.wait(2000)
        EddCustomer.ClickYes12()
        cy.wait(4000)
        EddCustomer.ClickButtonSave()
        cy.wait(4000)








        // EddCustomer.InputCustomerID(APUPPT.CustomerID)
        // cy.wait(6000)


        // Menu.ClickProfile()
        // Menu.ClickProfileAccount()
        // EddCustomer.InputCustomerID(APUPPT.CustomerID)
        // ProfileAccount.InputCustomerName(APUPPT.CustomerName)
        // ProfileAccount.InputTotalAccount(APUPPT.TotalAccount)
        // cy.wait(6000)
        // ProfileAccount.ClickActionButton()
        // cy.wait(4000)
        // ProfileAccount.InputCustomerIDAcc(APUPPT.CustomerIDACC)
        // ProfileAccount.InputCustomerNameAcc(APUPPT.CustomerNameACC)
        // ProfileAccount.InputProductCodeAcc(APUPPT.ProductCodeACC)
        // ProfileAccount.InputProductAcc(APUPPT.ProductACC)
        // ProfileAccount.InputOpeningDateAcc(APUPPT.OpeningDateACC)
        // ProfileAccount.InputAccountNumberAcc(APUPPT.AccountNumberACC)
        // ProfileAccount.InputBranchCode(APUPPT.BranchCode)
        // ProfileAccount.InputBranchName(APUPPT.BranchName)
        // ProfileAccount.InputAccountName(APUPPT.AccountName)
        // ProfileAccount.ClickCloseDetailAccount()
        // cy.wait(4000)
        // ProfileAccount.ClickExportButton()
        // ProfileAccount.ClickBranchExport()
        // ProfileAccount.InputValueData(APUPPT.Branch)
        // ProfileAccount.ClickProductExport()
        // ProfileAccount.InputValueData(APUPPT.Product)
        // ProfileAccount.ClickOpeningDate(APUPPT.OpeningDate)
        // ProfileAccount.ClickApplyButton()
        // ProfileAccount.ClickSaveExport()
        // cy.wait(4000)
        // Logout.ClickAvatarLogout()
        // Logout.ClickButtonLogout()
    })
})
    