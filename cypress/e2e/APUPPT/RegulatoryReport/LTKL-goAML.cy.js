import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import goamlLTKL from "../../../Pages/goamlLTKL"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let LTKL = new goamlLTKL


describe ('Menu goAML LTKL', () => {

    before('Link Visit', () => {
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('goAML LTKL Report', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-muted').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickRegulatoryReport()
        Menu.ClickGoamlLTKL()
        cy.wait(4000)
        LTKL.InputTransactionDate('2023-01-19')
        //LTKL.InputSubmissionDate('')
        LTKL.InputCustomerID('110000367')
        LTKL.InputCustomerName('GAJAH TUNGGAL TBK PT.')
        LTKL.InputTransactionType('D')
        LTKL.InputTotalLocalAmount('22631')
        cy.get('.sorting_asc').scrollIntoView()
        cy.wait(4000)
        LTKL.ClickButtonAction()
        LTKL.ClickEditReportedXml()
        LTKL.InputPPATKReportID('Jiarsi')
        cy.wait(4000)
        LTKL.InputReportedDate('2023-02-01')//yyyy-mm-dd
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