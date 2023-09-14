import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import MonitoringUTR from "../../../Pages/MonitoringCTR"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let UTRMonitoring = new MonitoringUTR


describe ('Menu Monitoring UTR', () => {

let APUPPT;

    before('Link Visit', () => {
        cy.fixture("Monitoring_UTR.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser1')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('List data Monitoring UTR', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickMonitoring()
        Menu.ClickMonitoringUTR()
        cy.wait(4000)
        UTRMonitoring.InputCustomerID(APUPPT.CustomerID)
        UTRMonitoring.InputCustomerName(APUPPT.CustomerName)
        UTRMonitoring.InputTransactionDate(APUPPT.TransactionDate)
        UTRMonitoring.InputTransactionDesc(APUPPT.TransactionDesc)
        UTRMonitoring.InputTransactionType(APUPPT.TransactionType)
        UTRMonitoring.InputBranchCode(APUPPT.BranchCode)
        UTRMonitoring.InputBranch(APUPPT.Branch)
        UTRMonitoring.InputWorkedStatus(APUPPT.WorkedStatus)
        UTRMonitoring.InputReportStatus(APUPPT.ReportStatus)
        UTRMonitoring.InputTransactionStatus(APUPPT.TransactionStatus)
        cy.get('.sorting_asc').scrollIntoView()
        cy.wait(4000)
        UTRMonitoring.ClickButtonDetail()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})