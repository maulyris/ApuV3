import LoginPage from "../../../Pages/loginPage";
import LogoutPage from "../../../Pages/LogoutPage";
import MenuElement from "../../../Pages/Menu";
import SuspectedCustomer from "../../../Pages/SuspectedCustomer";


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let CustomerSuspect = new SuspectedCustomer

describe ('Suspected Customer', () => {

    let APUPPT;
    before('Link Visit', () => {
        cy.fixture("Suspected_Customer.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })


    it('Customer Suspect List', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickSuspected()
        cy.wait(4000)
        Menu.ClickSucpectedCustomer()
        cy.wait(4000)
        CustomerSuspect.ClickCustomerList()
        cy.wait(4000)
        CustomerSuspect.InputScreeningValue(APUPPT.ScreeningValue)
        cy.wait(4000)
        CustomerSuspect.InputFileName(APUPPT.FileName)
        cy.wait(4000)
        CustomerSuspect.InputCreatedByName(APUPPT.CreatedByName)
        cy.wait(4000)
        CustomerSuspect.InputCreatedOn(APUPPT.CreatedOn)
        cy.wait(4000)
        CustomerSuspect.InputCustomerID(APUPPT.CustomerID)
        cy.wait(4000)
        CustomerSuspect.InputCustomerType(APUPPT.CustomerType)
        cy.wait(4000)
        CustomerSuspect.InputCustomerName(APUPPT.CustomerName)
        cy.wait(4000)
        CustomerSuspect.InputSuspect(APUPPT.SuspectDesc)
        cy.wait(4000)
        CustomerSuspect.InputDescription(APUPPT.Description)
        cy.wait(4000)
        cy.get('#elm_thead_cust > :nth-child(1) > .sorting_asc').scrollIntoView()
        cy.wait(4000)
        CustomerSuspect.ClickChecklistSuspect()
        cy.wait(4000)
        CustomerSuspect.ClickMakeSuspect()
        CustomerSuspect.InputMakeSuspectRemark(APUPPT.Remark)
        CustomerSuspect.ClickApproveSuspect()
        cy.wait(4000)
        CustomerSuspect.ClickOKButton()
        cy.wait(4000)
        CustomerSuspect.ClickButtonEditRemark(APUPPT.Remark)
        CustomerSuspect.InputSuspectionRemark()
        CustomerSuspect.ClickApproveRemark()
        cy.wait(4000)
        CustomerSuspect.ClickOKButton()
        cy.wait(4000)
        CustomerSuspect.ClickViewLog()
        cy.wait(4000)
        CustomerSuspect.ClickCancelViewLog()
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

//      _____                           _           _    _____          _                                                                         _ 
//     / ____|                         | |         | |  / ____|        | |                              /\                                       | |
//    | (___  _   _ ___ _ __   ___  ___| |_ ___  __| | | |    _   _ ___| |_ ___  _ __ ___   ___ _ __   /  \    _ __  _ __  _ __ _____   _____  __| |
//     \___ \| | | / __| '_ \ / _ \/ __| __/ _ \/ _` | | |   | | | / __| __/ _ \| '_ ` _ \ / _ \ '__| / /\ \  | '_ \| '_ \| '__/ _ \ \ / / _ \/ _` |
//     ____) | |_| \__ \ |_) |  __/ (__| ||  __/ (_| | | |___| |_| \__ \ || (_) | | | | | |  __/ |   / ____\ \| |_) | |_) | | | (_) \ V /  __/ (_| |
//    |_____/ \__,_|___/ .__/ \___|\___|\__\___|\__,_|  \_____\__,_|___/\__\___/|_| |_| |_|\___|_|  /_/    \_\  .__/| .__/|_|  \___/ \_/ \___|\__,_|
//                     | |                                                                                    | |   | |                             
//                     |_|                                                                                    |_|   |_|                               

        CustomerSuspect.ClickCustomerSuspect()
        cy.wait(4000)
        CustomerSuspect.InputScreeningValueSuspect(APUPPT.ScreeningValue)
        cy.wait(4000)
        CustomerSuspect.InputFileNameSuspect(APUPPT.FileName)
        cy.wait(4000)
        CustomerSuspect.InputCreatedByNameSuspect(APUPPT.CreatedByName)
        cy.wait(4000)
        CustomerSuspect.InputCreatedOnSuspect(APUPPT.CreatedOn)
        cy.wait(4000)
        CustomerSuspect.InputCustomerIDSuspect(APUPPT.CustomerID)
        cy.wait(4000)
        CustomerSuspect.InputCustomerTypeDescSuspect(APUPPT.CustomerTypeDesc)
        cy.wait(4000)
        CustomerSuspect.InputCustomerNameSuspect(APUPPT.CustomerName)
        cy.wait(4000)
        CustomerSuspect.InputSuspectDescSuspect(APUPPT.SuspectDesc)
        cy.wait(4000)
        CustomerSuspect.InputDescriptionSuspect('DTTOT')
        cy.get('#elm_thead_cust > :nth-child(1) > .sorting_asc').scrollIntoView()
        cy.wait(4000)
        CustomerSuspect.ClickButtonEditRemarkSuspect()
        CustomerSuspect.InputSuspectionRemark(APUPPT.Remark)
        CustomerSuspect.ClickApproveRemark()
        CustomerSuspect.ClickOKButton()
        cy.wait(4000)
        CustomerSuspect.ClickViewLog()
        cy.wait(4000)
        CustomerSuspect.ClickCancelViewLog()
        
//              _     _    _____                           _   
//     /\      | |   | |  / ____|                         | |  
//    /  \   __| | __| | | (___  _   _ ___ _ __   ___  ___| |_ 
//   / /\ \ / _` |/ _` |  \___ \| | | / __| '_ \ / _ \/ __| __|
//  / ____ \ (_| | (_| |  ____) | |_| \__ \ |_) |  __/ (__| |_ 
// /_/    \_\__,_|\__,_| |_____/ \__,_|___/ .__/ \___|\___|\__|
//                                        | |                  
//                                        |_|                  

        CustomerSuspect.ClickAddSuspect()
        CustomerSuspect.InputAddCustomerID(APUPPT.AddCustomerID)
        cy.wait(4000)
        CustomerSuspect.ClickSuspectCodeList()
        CustomerSuspect.ClickValueSuspectCode()
        cy.wait(4000)
        CustomerSuspect.InputAddSuspectNews(APUPPT.AddSuspectNews)
        CustomerSuspect.InputAddSuspectNumber(APUPPT.AddSuspectNumber)
        CustomerSuspect.ClickButtonAdd()
        cy.wait(4000)
        CustomerSuspect.ClickOKButton()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})