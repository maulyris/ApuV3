import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import goamlLTKT from "../../../Pages/goamlLTKT"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let LTKT = new goamlLTKT 


describe ('Menu goAML LTKT', () => {

    before('Link Visit', () => {
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('goAML LTKT Report', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-muted').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickRegulatoryReport()
        Menu.ClickGoamlLTKT()
        cy.wait(4000)
        LTKT.InputTransactionDate('2022-10-31')
       // LTKT.InputSubmissionDate('')
        LTKT.InputCustomerID('100000368')
        LTKT.InputCustomerName('GAJAH TUNGGAL TBK PT.')
        LTKT.InputDebitCreditDesc('Debit')
        LTKT.InputTotalLocalAmount('48983641074')
        cy.get('.sorting_asc').scrollIntoView()
        cy.wait(4000)
        LTKT.ClickButtonAction() 
        LTKT.ClickEditReportedXml()
        LTKT.InputPPATKReportID('Jiarsi')
        cy.wait(4000)
        LTKT.InputReportedDate('2023-01-01')
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