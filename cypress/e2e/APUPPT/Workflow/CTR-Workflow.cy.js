import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import CashTransaction from "../../../Pages/WorkflowCTR"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let CTR = new CashTransaction


describe ('Menu CTR', () => {

    let APUPPT;
    before('Link Visit', () => {
        cy.fixture("Workflow_CTR.json").then((data)=>
        {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('analis.kc.1')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Cash Transaction Workflow', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickWorkflow()
        Menu.ClickCashTransaction()
        Cypress.wait(4000)
        CTR.InputBankType(APUPPT.BankType)
        CTR.InputTransactionDate(APUPPT.TransactionDate)
        CTR.InputBranch(APUPPT.Branch)
        CTR.InputCustomerID(APUPPT.CustomerID)
        CTR.InputCustomerName(APUPPT.CustomerName)
        cy.wait(4000)
        CTR.InputCustomerType(APUPPT.CustomerType)
        cy.wait(4000)
        CTR.InputTransationType(APUPPT.TransationType)
        cy.wait(4000)
        CTR.InputLocalAmount(APUPPT.LocalAmount)
        cy.wait(4000)
        CTR.InputTransactionFreq(APUPPT.TransactionFreq)
        cy.wait(4000)
        cy.get('[style="width: 41.5px;"]').scrollIntoView()
        cy.wait(2000)
        CTR.ClickButtonCTR()
        cy.wait(4000)
        CTR.InputBranchDesc(APUPPT.BranchDesc)
        CTR.InputTransactionNumber(APUPPT.TransactionNumber)
        CTR.InputTransactionCode(APUPPT.TransactionCode)
        CTR.InputAccountNumber(APUPPT.AccountNumber)
        CTR.InputLocalAmount(APUPPT.LocalAmountDetail)
        CTR.ClickButtonDetailCTR()
        cy.wait(4000)
        CTR.ClickFullCash()
        CTR.ClickRulesCode()
        CTR.InputTransactionInformation(APUPPT.TransactionInformation)
        cy.wait(4000)
        CTR.ClickButtonContinue()
        cy.wait(4000)
        CTR.ClickSaveToAll()
        CTR.ClickButtonContinue()
        CTR.ClickButtonCTR()
        cy.wait(4000)
        CTR.ClickButtonSubmit()
    })
})