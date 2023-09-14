import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import UnusualTransaction from "../../../Pages/WorkflowUTR"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let UTR = new UnusualTransaction


describe ('Menu Unusual Transaction', () => {

    let APUPPT;
    before('Link Visit', () => {
        cy.fixture("Workflow_UTR.json").then((data)=>
        {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('analis.kc.2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Unusual Transaction Workflow', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickWorkflow()
        Menu.ClickCashTransaction()
        UTR.InputBankType(APUPPT.BankType)
        cy.wait(4000)
        UTR.InputTransactionDate(APUPPT.TransactionDate)
        cy.wait(4000)
        UTR.InputBranch(APUPPT.Branch)
        cy.wait(4000)
        UTR.InputCustomerID(APUPPT.CustomerID)
        cy.wait(4000)
        UTR.InputCustomerName(APUPPT.CustomerName)
        cy.wait(4000)
        UTR.InputCustomerType(APUPPT.CustomerType)
        cy.wait(4000) 
        UTR.InputTransationType(APUPPT.TransationType)
        cy.wait(4000)
        UTR.InputLocalAmount(APUPPT.LocalAmount)
        cy.wait(4000)
        UTR.InputTransactionFreq(APUPPT.TransactionFreq)
        cy.wait(4000)
        cy.get('[style="width: 41.5px;"]').scrollIntoView()
        cy.wait(2000)
        UTR.ClickButtonUTR()
        cy.wait(4000)
        UTR.ClickButtonDetailUTR()
        cy.wait(4000)
        UTR.ClickFullCash()
        UTR.ClickRulesCode()
        UTR.InputTransactionInformation(APUPPT.TransactionInformation)
        cy.wait(4000)
        UTR.ClickButtonContinue()
        cy.wait(4000)
        UTR.ClickSaveToAll()
        UTR.ClickButtonContinue()
        UTR.ClickButtonUTR()
        cy.wait(4000)
        UTR.ClickButtonSubmit()
    })
})