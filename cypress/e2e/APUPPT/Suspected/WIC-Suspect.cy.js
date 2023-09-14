import LoginPage from "../../../Pages/loginPage";
import LogoutPage from "../../../Pages/LogoutPage";
import MenuElement from "../../../Pages/Menu";
import SuspectedWIC from "../../../Pages/SuspectedWIC";


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let WICSuspect = new SuspectedWIC

describe ('Suspected WIC', () => {

    let APUPPT;
    before('Link Visit', () => {
        cy.fixture("Suspected_WIC.json").then((data)=>
        {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Walk In Customer Suspect List', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickSuspected()
        cy.wait(4000)
        Menu.ClickSuspectedWalkInCustomer()
        cy.wait(4000)
        WICSuspect.ClickWICList()
        cy.wait(4000)
        WICSuspect.InputScreeningValue(APUPPT.ScreeningValue)
        cy.wait(4000)
        WICSuspect.InputFileName(APUPPT.FileName)
        cy.wait(4000)
        WICSuspect.InputCreatedByName(APUPPT.CreatedByName)
        cy.wait(4000)
        WICSuspect.InputCreatedOn(APUPPT.CreatedOn)
        cy.wait(4000)
        WICSuspect.InputCustomerID(APUPPT.CustomerID)
        cy.wait(4000)
        WICSuspect.InputCustomerTypeDesc(APUPPT.CustomerType)
        cy.wait(4000)
        WICSuspect.InputCustomerName(APUPPT.CustomerName)
        cy.wait(4000)
        WICSuspect.InputSuspectDesc(APUPPT.SuspectDesc)
        cy.wait(4000)
        WICSuspect.InputDescription(APUPPT.Description)
        cy.wait(4000)
        cy.get('#elm_thead_cust > :nth-child(1) > .sorting_asc').scrollIntoView()
        cy.wait(4000)
        WICSuspect.ClickChecklistSuspect()
        cy.wait(4000)
        WICSuspect.ClickMakeSuspect()
        WICSuspect.InputMakeSuspectRemark(APUPPT.Remark)
        cy.wait(4000)
        WICSuspect.ClickApproveSuspect()
        cy.wait(4000)
        WICSuspect.ClickOKButton()
        cy.wait(4000)
        WICSuspect.ClickButtonEditRemark()
        WICSuspect.InputSuspectionRemark(APUPPT.Remark)
        WICSuspect.ClickApproveRemark()
        cy.wait(4000)
        WICSuspect.ClickOKButton()
        cy.wait(4000)
        WICSuspect.ClickViewLog()
        cy.wait(4000)
        WICSuspect.ClickCancelViewLog()
        cy.wait(4000)

//      _____                           _           __   _          _______ _____                                         
//     / ____|                         | |         | |  \ \        / /_   _/ ____|     /\                                   
//    | (___  _   _ ___ _ __   ___  ___| |_ ___  __| |   \ \  /\  / /  | || |         /  \   _ __  _ __  _ __ _____   _____ 
//     \___ \| | | / __| '_ \ / _ \/ __| __/ _ \/ _` |    \ \/  \/ /   | || |        / /\ \ | '_ \| '_ \| '__/ _ \ \ / / _ \
//     ____) | |_| \__ \ |_) |  __/ (__| ||  __/ (_| |     \  /\  /   _| || |____   / ____ \| |_) | |_) | | | (_) \ V /  __/
//    |_____/ \__,_|___/ .__/ \___|\___|\__\___|\__,_|      \/  \/   |_____\_____/  _/    \_\ .__/| .__/|_|  \___/ \_/ \___|
//                     | |                                                                  | |   | |                       
//                     |_|                                                                  |_|   |_|                       
        
        WICSuspect.InputScreeningValueSuspect(APUPPT.ScreeningValue)
        cy.wait(4000)
        WICSuspect.InputFileNameSuspect(APUPPT.FileName)
        cy.wait(4000)
        WICSuspect.InputCreatedByNameSuspect(APUPPT.CreatedByName)
        cy.wait(4000)
        WICSuspect.InputCreatedOnSuspect(APUPPT.CreatedOn)
        cy.wait(4000)
        WICSuspect.InputCustomerIDSuspect(APUPPT.CustomerID)
        cy.wait(4000)
        WICSuspect.InputCustomerTypeDescSuspect(APUPPT.CustomerType)
        cy.wait(4000)
        WICSuspect.InputCustomerNameSuspect(APUPPT.CustomerName)
        cy.wait(4000)
        WICSuspect.InputSuspectDescSuspect(APUPPT.SuspectDesc)
        cy.wait(4000)
        WICSuspect.InputDescriptionSuspect(APUPPT.Description)
        cy.get('#elm_thead_suspect > :nth-child(1) > .sorting_asc').scrollIntoView()
        cy.wait(4000)
        WICSuspect.ClickChecklistSuspectWIC()
        WICSuspect.ClickCancelSuspect()
        WICSuspect.InputCancelSuspectRemark(APUPPT.Remark)
        cy.wait(4000)
        WICSuspect.ClickApproveCancelRemark()
        WICSuspect.ClickOKButton()
        cy.wait(4000)
        WICSuspect.ClickWICSuspect()
        cy.wait(4000)
        WICSuspect.ClickButtonEditRemarkSuspect()
        WICSuspect.InputSuspectionRemark(APUPPT.Remark)
        WICSuspect.ClickApproveRemark()
        WICSuspect.ClickOKButton()
        cy.wait(4000)
        WICSuspect.ClickWICSuspect()
        WICSuspect.ClickViewLogSuspect()
        cy.wait(4000)
        WICSuspect.ClickCancelViewLog()

//              _     _    _____                           _   
//     /\      | |   | |  / ____|                         | |  
//    /  \   __| | __| | | (___  _   _ ___ _ __   ___  ___| |_ 
//   / /\ \ / _` |/ _` |  \___ \| | | / __| '_ \ / _ \/ __| __|
//  / ____ \ (_| | (_| |  ____) | |_| \__ \ |_) |  __/ (__| |_ 
// /_/    \_\__,_|\__,_| |_____/ \__,_|___/ .__/ \___|\___|\__|
//                                        | |                  
//                                        |_|                  
    
        WICSuspect.ClickAddWICButton()
        WICSuspect.InputAddCustomerID(APUPPT.AddCustomerID)
        cy.wait(4000)
        WICSuspect.ClickSuspectCodeList()
        WICSuspect.ClickValueSuspectCode()
        cy.wait(4000)
        WICSuspect.InputAddSuspectNews(APUPPT.AddSuspectNews)
        WICSuspect.InputAddSuspectNumber(APUPPT.AddSuspectNumber)
        WICSuspect.ClickButtonAdd()
        cy.wait(4000)
        WICSuspect.ClickOKButton()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
        
    })

})