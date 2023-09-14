import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import ApprovalList from "../../Pages/ApprovalList"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let Approval = new ApprovalList

describe ('Account Exception', ()=>
{
    let APUPPT;

    before('Link Visit',() => {
        cy.fixture("Account-Exception.json").then((data) => {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })
    
    it("Detail Approval List", () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickApprovalList()
// Searching Data
        Approval.InputReportDate(APUPPT.ReportDate)
        Approval.InputInsertDate(APUPPT.InsertDate)
        Approval.InputFormGroup(APUPPT.FormGroup)
        Approval.InputCreatedBy(APUPPT.CreatedBy)
        Approval.InputCreatedOn(APUPPT.CratedOn)
        cy.wait(3000)
// Approve Data
        Approval.ClickEditButton()     
        Approval.ClickApproveButton()
        Approval.ClickOKButton()
// Reject Data       
        Approval.ClickEditButton()
        Approval.ClickRejectButton()
        Approval.ClickOKButton()
// View Data Approval
        Approval.ClickViewButton()
        Approval.InputSearchButton(APUPPT.Search)
        Approval.ClickCloseButton()
    })
})
