import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import goamlLTKM from "../../../Pages/goamlLTKM"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let LTKM = new goamlLTKM


describe ('Menu goAML LTKM', () => {

    let APUPPT;
    before('Link Visit', () => {
        cy.fixture("goaml_LTKM.json").then((data)=>
        {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('goAML LTKM Report', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickRegulatoryReport()
        Menu.ClickGoamlLTKM()
        cy.wait(4000)
        LTKM.InputBankDesc(APUPPT.BankDesc)
        LTKM.InputTransactionDate(APUPPT.TransactionDate)
        //LTKM.InputSubmissionDate('')
        LTKM.InputCustomerID(APUPPT.CustomerID)
        LTKM.InputCustomerName(APUPPT.CustomerName)
        LTKM.InputDebitCreditCode(APUPPT.TransactionCode)
        LTKM.InputDebitCreditDesc(APUPPT.TransactionType)
        LTKM.InputTotalLocalAmount(APUPPT.TotalLocalAmount)
        cy.get('.sorting_asc').scrollIntoView()
        cy.wait(4000)
        LTKM.ClickButtonAction()
        cy.wait(4000)
        LTKM.InputCustomerIDEdit(APUPPT.CustomerIDEdit)
        LTKM.InputCustomerNameEdit(APUPPT.CustomerNameEdit)
        LTKM.InputTransactionTypeEdit(APUPPT.TransactionTypeEdit)
        LTKM.InputBranchCodeEdit(APUPPT.BranchCodeEdit)
        LTKM.InputAccountNumberEdit(APUPPT.AccountNumberEdit)
        LTKM.InputTotalLocalAmountEdit(APUPPT.TotalLocalAmountEdit)
        LTKM.InputTotalRealAmount(APUPPT.TotalRealAmount)
        LTKM.InputTotalSubmissionAmount(APUPPT.TotalSubmissionAmount)
        LTKM.InputTotalFreqSub(APUPPT.TotalFreqSub)
        cy.wait(4000)
        LTKM.ClickButtonEditTransaction()
        LTKM.ClickEditReportedXml()
        LTKM.InputPPATKReportID(APUPPT.REPORTID)
        cy.wait(4000)
        LTKM.InputReportedDate(APUPPT.DATE)
        LTKM.ClickButtonSave()
        cy.wait(4000)
        LTKM.ClickButtonOK()
        cy.wait(4000)
        LTKM.ClickChecklistOne()
        cy.wait(4000)
        LTKM.ClickButtonExport()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})