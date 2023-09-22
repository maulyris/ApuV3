import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import goamlLTKT from "../../../Pages/goamlLTKT"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let LTKT = new goamlLTKT 


describe ('Menu goAML LTKT', () => {
    let APUPPT;

    before('Link Visit', () => {
        cy.fixture("goaml_LTKT.json").then((data)=>{APUPPT=data;})
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('goAML LTKT Report', () => {
        cy.xpath('//a[@class="text-black text-hover-primary"]').should('be.visible')
        Menu.ClickRegulatoryReport()
        Menu.ClickGoamlLTKT()
        cy.wait(4000)
        LTKT.InputTransactionDate(APUPPT.TransactionDate)
       // LTKT.InputSubmissionDate('')
        LTKT.InputCustomerID(APUPPT.CustomerID)
        LTKT.InputCustomerName(APUPPT.CustomerName)
        LTKT.InputTransactionTypeCode(APUPPT.TransactionTypeCode)
        LTKT.InputTransactionType(APUPPT.TransactionType)
        LTKT.InputTotalLocalAmount(APUPPT.TotalLocalAmount)
        cy.get('.sorting_asc').scrollIntoView()
        cy.wait(4000)
        LTKT.ClickButtonAction() 
        LTKT.ClickEditReportedXml()
        LTKT.InputPPATKReportID(APUPPT.REPORTID)
        cy.wait(4000)
        LTKT.InputReportedDate(APUPPT.ReportedDate)
        LTKT.ClickButtonSave()
        cy.wait(4000)
        LTKT.ClickButtonOK()
        cy.wait(4000)
        LTKT.ClickChecklistOne()
        cy.wait(4000)
        LTKT.ClickButtonExport()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})