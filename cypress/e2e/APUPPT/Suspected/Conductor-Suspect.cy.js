import LoginPage from "../../../Pages/loginPage";
import LogoutPage from "../../../Pages/LogoutPage";
import MenuElement from "../../../Pages/Menu";
import SuspectedConductor from "../../../Pages/SuspectedConductor";


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let ConductorSuspect = new SuspectedConductor

describe ('Suspected Conductor', () => {

    let APUPPT;

    before('Link Visit', () => {
        cy.fixture("Suspected_Conductor.json").then((data)=>
        {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Conductor Suspect List', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-muted').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickSuspected()
        cy.wait(4000)
        Menu.ClickSuspectedConductor()
        cy.wait(4000)
        ConductorSuspect.ClickConductorList()
        cy.wait(4000)
        ConductorSuspect.InputScreeningValue(APUPPT.ScreeningValue)
        cy.wait(4000)
        ConductorSuspect.InputFileName(APUPPT.FileName)
        cy.wait(4000)
        ConductorSuspect.InputCreatedByName(APUPPT.CreatedByName)
        cy.wait(4000)
        ConductorSuspect.InputCreatedOn(APUPPT.CreatedOn)
        cy.wait(4000)
        ConductorSuspect.InputCustomerID(APUPPT.CustomerID)
        cy.wait(4000)
        ConductorSuspect.InputCustomerTypeDesc(APUPPT.CustomerType)
        cy.wait(4000)
        ConductorSuspect.InputCustomerName(APUPPT.CustomerName)
        cy.wait(4000)
        ConductorSuspect.InputSuspectDesc(APUPPT.SuspectDesc)
        cy.wait(4000)
        ConductorSuspect.InputDescription(APUPPT.Description)
        cy.wait(4000)
        cy.get('#elm_thead_cust > :nth-child(1) > .sorting_asc').scrollIntoView()
        cy.wait(4000)
        ConductorSuspect.ClickChecklistSuspect()
        cy.wait(4000)
        ConductorSuspect.ClickMakeSuspect()
        ConductorSuspect.InputMakeSuspectRemark(APUPPT.Remark)
        cy.wait(4000)
        ConductorSuspect.ClickApproveSuspect()
        cy.wait(4000)
        ConductorSuspect.ClickOKButton()
        cy.wait(4000)
        ConductorSuspect.ClickButtonEditRemark()
        ConductorSuspect.InputSuspectionRemark(APUPPT.Remark)
        ConductorSuspect.ClickApproveRemark()
        cy.wait(4000)
        ConductorSuspect.ClickOKButton()
        cy.wait(4000)
        ConductorSuspect.ClickViewLog()
        cy.wait(4000)
        ConductorSuspect.ClickCancelViewLog()
        cy.wait(4000)


//      _____                           _           _    _____                _            _                                                         _ 
//     / ____|                         | |         | |  / ____|              | |          | |               /\                                      | |
//    | (___  _   _ ___ _ __   ___  ___| |_ ___  __| | | |     ___  _ __   __| |_   _  ___| |_ ___  _ __   /  \   _ __  _ __  _ __ _____   _____  __| |
//     \___ \| | | / __| '_ \ / _ \/ __| __/ _ \/ _` | | |    / _ \| '_ \ / _` | | | |/ __| __/ _ \| '__| / /\ \ | '_ \| '_ \| '__/ _ \ \ / / _ \/ _` |
//     ____) | |_| \__ \ |_) |  __/ (__| ||  __/ (_| | | |___| (_) | | | | (_| | |_| | (__| || (_) | |   / ____ \| |_) | |_) | | | (_) \ V /  __/ (_| |
//    |_____/ \__,_|___/ .__/ \___|\___|\__\___|\__,_|  \_____\___/|_| |_|\__,_|\__,_|\___|\__\___/|_|  /_/    \_\ .__/| .__/|_|  \___/ \_/ \___|\__,_|
//                     | |                                                                                       | |   | |                             
//                     |_|                                                                                       |_|   |_|                             
   
             
        ConductorSuspect.InputScreeningValueSuspect(APUPPT.ScreeningValue)
        cy.wait(4000)
        ConductorSuspect.InputFileNameSuspect(APUPPT.FileName)
        cy.wait(4000)
        ConductorSuspect.InputCreatedByNameSuspect(APUPPT.CreatedByName)
        cy.wait(4000)
        ConductorSuspect.InputCreatedOnSuspect(APUPPT.CreatedOn)
        cy.wait(4000)
        ConductorSuspect.InputCustomerIDSuspect(APUPPT.CustomerID)
        cy.wait(4000)
        ConductorSuspect.InputCustomerTypeDescSuspect(APUPPT.CustomerType)
        cy.wait(4000)
        ConductorSuspect.InputCustomerNameSuspect(APUPPT.CustomerName)
        cy.wait(4000)
        ConductorSuspect.InputSuspectDescSuspect(APUPPT.SuspectDesc)
        cy.wait(4000)
        ConductorSuspect.InputDescriptionSuspect(APUPPT.Description)
        cy.get('#elm_thead_suspect > :nth-child(1) > .sorting_asc').scrollIntoView()
        cy.wait(4000)
        ConductorSuspect.ClickChecklistSuspectWIC()
        ConductorSuspect.ClickCancelSuspect()
        ConductorSuspect.InputCancelSuspectRemark(APUPPT.Remark)
        cy.wait(4000)
        ConductorSuspect.ClickApproveCancelRemark()
        ConductorSuspect.ClickOKButton()
        cy.wait(4000)
        ConductorSuspect.ClickConductorSuspect()
        cy.wait(4000)
        ConductorSuspect.ClickButtonEditRemarkSuspect()
        ConductorSuspect.InputSuspectionRemark(APUPPT.Remark)
        ConductorSuspect.ClickApproveRemark()
        ConductorSuspect.ClickOKButton()
        cy.wait(4000)
        ConductorSuspect.ClickConductorSuspect()
        ConductorSuspect.ClickViewLogSuspect()
        cy.wait(4000)
        ConductorSuspect.ClickCancelViewLog()

//              _     _    _____                           _   
//     /\      | |   | |  / ____|                         | |  
//    /  \   __| | __| | | (___  _   _ ___ _ __   ___  ___| |_ 
//   / /\ \ / _` |/ _` |  \___ \| | | / __| '_ \ / _ \/ __| __|
//  / ____ \ (_| | (_| |  ____) | |_| \__ \ |_) |  __/ (__| |_ 
// /_/    \_\__,_|\__,_| |_____/ \__,_|___/ .__/ \___|\___|\__|
//                                        | |                  
//                                        |_|                  
    
        ConductorSuspect.ClickAddConductorButton()
        ConductorSuspect.InputAddCustomerID(APUPPT.AddCustomerID)
        cy.wait(4000)
        ConductorSuspect.ClickSuspectCodeList()
        ConductorSuspect.ClickValueSuspectCode()
        cy.wait(4000)
        ConductorSuspect.InputAddSuspectNews(APUPPT.AddSuspectNews)
        ConductorSuspect.InputAddSuspectNumber(APUPPT.AddSuspectNumber)
        ConductorSuspect.ClickButtonAdd()
        cy.wait(4000)
        ConductorSuspect.ClickOKButton()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
        
    })

})