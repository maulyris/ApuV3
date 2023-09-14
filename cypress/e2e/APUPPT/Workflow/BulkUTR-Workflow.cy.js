import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import BulkUnusualTransaction from "../../../Pages/WorkflowBulkCTR"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let BulkUTR = new BulkUnusualTransaction


describe ('Menu Bulk CTR', () => {
    let APUPPT;
    before('Link Visit', () => {
        cy.fixture("Workflow_BulkCTR.json").then((data)=>
        {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('analis.kc.1')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Bulk Cash Transaction Workflow', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickWorkflow()
        Menu.ClickBulkCashTransaction()
        cy.wait(4000)
        BulkCTR.InputCustomerID(APUPPT.CustomerID)
        BulkCTR.InputTransactionDate(APUPPT.TransactionDate)
        BulkCTR.InputCustomerName(APUPPT.CustomerName)
        BulkCTR.InputTransactionFreq(APUPPT.TransactionFreq)
        BulkCTR.InputBankType(APUPPT.BankType)
        BulkCTR.InputTransationType(APUPPT.TransationType)
        cy.wait(4000)
        BulkCTR.ClickChecklistAll()
        BulkCTR.ClickApproveButton()
        cy.wait(4000)
        BulkCTR.ClickTransactionDetail()
        BulkCTR.InputTransactionInformation(APUPPT.TransactionInformation)
        BulkCTR.ClickReported()
        BulkCTR.ClickYesButton()
        cy.wait(4000)
    })

})