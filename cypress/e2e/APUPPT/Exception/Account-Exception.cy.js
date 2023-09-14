import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import ExceptionAccount from "../../../Pages/ExceptionAccount"
import ApprovalList from "../../../Pages/ApprovalList"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let AccountExceptiion = new ExceptionAccount
let Approval = new ApprovalList

describe ('Account Exception', ()=>
{
    let APUPPT;

    before('Link Visit',() => {
        cy.fixture("Account_Exception.json").then((data) => {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser1')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })


    it('Account Exception List', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickException()
        Menu.ClickAccountException()
// Account List Searching Data
        AccountExceptiion.ClickAccountListTab()
        cy.wait(6000)
        AccountExceptiion.SearchingBankDescList(APUPPT.BankType)
        cy.wait(4000)
        AccountExceptiion.SearchingCustomerIDList(APUPPT.CustomerID)
        cy.wait(4000)
        AccountExceptiion.SearchingCustomerNameList(APUPPT.CustomerName)
        cy.wait(4000)
        AccountExceptiion.SearchingBranchDescList(APUPPT.BranchName)
        cy.wait(4000)     
        AccountExceptiion.ClickButtonViewDetail()
        cy.wait(4000)
        AccountExceptiion.ClickButtonCloseList()
        cy.wait(4000)
// Make Exception
        AccountExceptiion.ClickCTRList()
        AccountExceptiion.ClickUTRList()
        AccountExceptiion.ClickMakeException()
        cy.wait(4000)
        AccountExceptiion.InputRemarkColumn(APUPPT.Remark)
        cy.wait(4000)
        AccountExceptiion.ClickSubmitRemark()
        cy.wait(3000)
        AccountExceptiion.ClickYesSubmit()
        cy.wait(4000)
        AccountExceptiion.ClickOKButton()
        cy.wait(4000)
        AccountExceptiion.ClickButtonExportList()
        cy.wait(4000)

// Menu Approval List
        Menu.ClickApprovalList()
        Approval.InputReportDate(APUPPT.ReportDate)
        Approval.InputFormGroup(APUPPT.FormGroup)
        cy.wait(3000)
        Approval.ClickEditButton()
        Approval.ClickApproveButton()
        Approval.ClickOKButton()
        cy.wait(4000)

//                                    _      ______                    _   _                                                           _ 
//     /\                            | |    |  ____|                  | | (_)                 /\                                      | |
//    /  \   ___ ___ ___  _   _ _ __ | |_   | |__  __  _____ ___ _ __ | |_ _  ___  _ __      /  \   _ __  _ __  _ __ _____   _____  __| |
//   / /\ \ / __/ __/ _ \| | | | '_ \| __|  |  __| \ \/ / __/ _ \ '_ \| __| |/ _ \| '_ \    / /\ \ | '_ \| '_ \| '__/ _ \ \ / / _ \/ _` |
//  / ____ \ (_| (_| (_) | |_| | | | | |_   | |____ >  < (_|  __/ |_) | |_| | (_) | | | |  / ____ \| |_) | |_) | | | (_) \ V /  __/ (_| |
// /_/    \_\___\___\___/ \__,_|_| |_|\__|  |______/_/\_\___\___| .__/ \__|_|\___/|_| |_/ /_/    \_\ .__/| .__/|_|  \___/ \_/ \___|\__,_|
//                                                              | |                                | |   | |                             
//                                                              |_|                                |_|   |_|                             
        
        Menu.ClickGeneralInfo()
        Menu.ClickException()
        Menu.ClickAccountException()
// Account Exception Approved Searching Data
        AccountExceptiion.ClickAccountException()
        cy.wait(6000)
        AccountExceptiion.SearchingkBankDescException(APUPPT.BankType)
        cy.wait(4000)
        AccountExceptiion.SearchingCustomerIDException(APUPPT.CustomerID)
        cy.wait(6000)
        AccountExceptiion.SearchingCustomerNameException(APUPPT.CustomerName)
        cy.wait(6000)
        AccountExceptiion.SearchingBranchDescException(APUPPT.BranchName)
        cy.wait(6000)
        AccountExceptiion.ClickButtonEditRemark()
        AccountExceptiion.ClickInputRemark(APUPPT.Remark)
        AccountExceptiion.ClickButtonSaveRemark()
        cy.wait(4000)
        AccountExceptiion.ClickOKButton()
        cy.wait(4000)
        AccountExceptiion.ClickButtonLogException()
        cy.wait(4000)
        AccountExceptiion.ClickButtonCloseLog()
        cy.wait(4000)

// Cancel Exception
        AccountExceptiion.SearchingkBankDescException(APUPPT.BankType)
        cy.wait(4000)
        AccountExceptiion.SearchingCustomerIDException(APUPPT.CustomerID)
        cy.wait(4000)
        AccountExceptiion.SearchingCustomerNameException(APUPPT.CustomerName)
        cy.wait(4000)
        AccountExceptiion.SearchingBranchDescException(APUPPT.BranchName)
        cy.wait(4000)
        AccountExceptiion.ClickCTRException()
        AccountExceptiion.ClickUTRException()
        cy.wait(4000)
        AccountExceptiion.ClickCancelException()
        cy.wait(4000)
        AccountExceptiion.InputRemarkCancelException(APUPPT.CancelRemark)
        AccountExceptiion.ClickSubmitRemarkCancel()
        cy.wait(4000)
        AccountExceptiion.ClickYesSubmitCancel()
        cy.wait(4000)
        AccountExceptiion.ClickOKButton()
        cy.wait(4000)
        AccountExceptiion.ClickButtonExportException()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
        cy.wait(4000)
    })

})