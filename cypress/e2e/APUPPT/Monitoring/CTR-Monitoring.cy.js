import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import MonitoringCTR from "../../../Pages/MonitoringCTR"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let CTRMonitoring = new MonitoringCTR

let APUPPT;

describe ('Menu Monitoring CTR', () => {

    before('Link Visit', () => {
        cy.fixture("Monitoring_CTR.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser3')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('List data Monitoring CTR', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickMonitoring()
        Menu.ClickMonitoringCTR()
        cy.wait(4000)
        CTRMonitoring.InputCustomerID(APUPPT.CustomerID)
        CTRMonitoring.InputCustomerName(APUPPT.CustomerName)
        CTRMonitoring.InputTransactionDate(APUPPT.TransactionDate)
        CTRMonitoring.InputTransactionDesc(APUPPT.TransactionDesc)
        CTRMonitoring.InputTransactionType(APUPPT.TransactionType)
        CTRMonitoring.InputBranchCode(APUPPT.BranchCode)
        CTRMonitoring.InputBranch(APUPPT.Branch)
        CTRMonitoring.InputWorkedStatus(APUPPT.WorkedStatus)
        CTRMonitoring.InputReportStatus(APUPPT.ReportStatus)
        CTRMonitoring.InputTransactionStatus(APUPPT.TransactionStatus)
        cy.get('[style="width: 41.5px;"]').scrollIntoView()
        cy.wait(4000)
        CTRMonitoring.ClickButtonDetail()
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})