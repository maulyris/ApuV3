import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import MonitoringReference from "../../../Pages/MonitoringReference"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let Reference = new MonitoringReference


describe ('Menu Monitoring Reference', () => {

    let APUPPT;

    before('Link Visit', () => {
        cy.fixture("Monitoring_Reference.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('List data Monitoring Reference', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickMonitoring()
        Menu.ClickMonitoringReference()
        cy.wait(4000)
        Reference.InputTransactionID(APUPPT.TransactionID)
        Reference.InputReferenceNumber(APUPPT.ReferenceNumber)
        Reference.InputTransactionDate(APUPPT.TransactionDate)
        Reference.InputAccountNumber(APUPPT.AccountNumber)
        Reference.InputCustomerID(APUPPT.CustomerID)
        Reference.InputTransactionType(APUPPT.TransactionType)
        Reference.InputLocalAmount(APUPPT.LocalAmount)
        cy.get('.sorting_disabled').scrollIntoView()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})