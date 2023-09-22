import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import goamlLTKL from "../../../Pages/goamlLTKL"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let LTKL = new goamlLTKL


describe ('Menu goAML LTKL', () => {
    let APUPPTT;

    before('Link Visit', () => {
        cy.fixture("goaml_LTKL.json").then((data)=>{APUPPTT=data;})
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser1')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('goAML LTKL Report', () => {
        cy.xpath('//a[@class="text-black text-hover-primary"]').should('be.visible')
        Menu.ClickRegulatoryReport()
        Menu.ClickGoamlLTKL()
        cy.wait(4000)
        LTKL.InputTransactionDate(APUPPTT.TransactionDate)
        //LTKL.InputSubmissionDate('')
        LTKL.InputCustomerID(APUPPTT.CustomerID)
        LTKL.InputCustomerName(APUPPTT.CustomerName)
        LTKL.InputTransactionType(APUPPTT.TransactionType)
        LTKL.InputTotalLocalAmount(APUPPTT.TotalLocalAmount)
        cy.get('.sorting_asc').scrollIntoView()
        cy.wait(4000)
        LTKL.ClickButtonAction()
        LTKL.ClickEditReportedXml()
        LTKL.InputPPATKReportID(APUPPTT.REPORTID)
        cy.wait(4000)
        LTKL.InputReportedDate(APUPPTT.ReportedDate)//yyyy-mm-dd
        LTKL.ClickButtonSave()
        cy.wait(4000)
        LTKL.ClickButtonOK()
        cy.wait(4000)
        LTKL.ClickChecklistOne()
        LTKL.ClickButtonExport()
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})