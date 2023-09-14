import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import ApprovalList from "../../../Pages/ApprovalList"
import MenuElement from "../../../Pages/Menu"
import ExceptionSector from "../../../Pages/ExceptionSector"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let Approval = new ApprovalList
let SectorException = new ExceptionSector

describe ('Sector Exception', ()=>{

    let APUPPT;

    before('Link Visit',() => {
        cy.fixture("Sector_Exception.json").then((data) => {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser1')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })


    it('Sector Exception List', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickException()
        Menu.ClickSectorException()
//SEARCHING CUSTOMER IN CUSTOMER LIST
        SectorException.ClickSectorListTab()
        cy.wait(6000)
        SectorException.SearchingBankDescList(APUPPT.BankType)
        cy.wait(4000)
        SectorException.SearchingSectorCode(APUPPT.SectorCode)
        cy.wait(6000)
        SectorException.SearchingSectorDesc(APUPPT.SectorDesc)
        cy.wait(6000)
        SectorException.ClickButtonViewDetail()
        cy.wait(4000)
        SectorException.ClickButtonCloseList()
        cy.wait(4000)
//Make Exception
        SectorException.ClickCTRList()
        SectorException.ClickUTRList()
        SectorException.ClickMakeException()
        cy.wait(4000)
        SectorException.InputRemarkColumn(APUPPT.Remark)
        cy.wait(4000)
        SectorException.ClickSubmitRemark()
        cy.wait(3000)
        SectorException.ClickYesSubmit()
        cy.wait(4000)
        SectorException.ClickOKButton()
        cy.wait(4000)
        SectorException.ClickButtonExportList()
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

//      _____           _               ______                    _   _                                                           _ 
//     / ____|         | |             |  ____|                  | | (_)                 /\                                      | |
//    | (___   ___  ___| |_ ___  _ __  | |__  __  _____ ___ _ __ | |_ _  ___  _ __      /  \   _ __  _ __  _ __ _____   _____  __| |
//     \___ \ / _ \/ __| __/ _ \| '__  |  __| \ \/ / __/ _ \ '_ \| __| |/ _ \| '_ \    / /\ \ | '_ \| '_ \| '__/ _ \ \ / / _ \/ _` |
//     ____) |  __/ (__| || (_) | |    | |____ >  < (_|  __/ |_) | |_| | (_) | | | |  / ____ \| |_) | |_) | | | (_) \ V /  __/ (_| |
//    |_____/ \___|\___|\__\___/|_|    |______/_/\_\___\___| .__/ \__|_|\___/|_| |_/ |_/    \_\ .__/| .__/|_|  \___/ \_/ \___|\__,_|
//                                                         | |                                | |   | |                             
//                                                         |_|                                |_|   |_|                               
        Menu.ClickGeneralInfo()
        Menu.ClickException()
        Menu.ClickSectorException()
// Sector Exception Approved Searching Data     
        SectorException.ClickSectorException()
        cy.wait(4000)
        SectorException.SearchingkBankDescException(APUPPT.BankType)
        cy.wait(4000)
        SectorException.SearchingSectorCodeException(APUPPT.SectorCode)
        cy.wait(4000)
        SectorException.SearchingSectorDescException(APUPPT.SectorDesc)
        cy.wait(4000)
        SectorException.ClickButtonEditRemark()
        SectorException.InputEditRemarkException(APUPPT.Remark)
        cy.wait(4000)
        SectorException.ClickButtonSaveRemark()
        cy.wait(4000)
        SectorException.ClickOKButton()
        cy.wait(4000)
        SectorException.ClickButtonLogException()
        cy.wait(4000)
        SectorException.ClickButtonCloseLog()
        cy.wait(4000)

// Cancel Exception
        SectorException.SearchingkBankDescException(APUPPT.BankType)
        cy.wait(4000)
        SectorException.SearchingSectorCodeException(APUPPT.SectorCode)
        cy.wait(4000)
        SectorException.SearchingSectorDescException(APUPPT.SectorDesc)
        cy.wait(4000)
        SectorException.ClickCTRException()
        SectorException.ClickUTRException()
        cy.wait(4000)
        SectorException.ClickCancelException()
        cy.wait(4000)
        SectorException.InputRemarkCancelException(APUPPT.Remark)
        SectorException.ClickSubmitRemarkCancel()
        cy.wait(4000)
        SectorException.ClickYesSubmitCancel()
        cy.wait(4000)
        SectorException.ClickOKButton()
        cy.wait(4000)
        SectorException.ClickButtonExportException()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
        cy.wait(4000)
    })

})