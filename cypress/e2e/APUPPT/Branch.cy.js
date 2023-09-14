import LoginPage from "../../Pages/loginPage";
import LogoutPage from "../../Pages/LogoutPage";
import MenuElement from "../../Pages/Menu";
import BranchPages from "../../Pages/BranchPage";


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let BranchMenu = new BranchPages

describe ('Branch Page', () => {

    let APUPPT;
    before('Link Visit', () => {
        cy.fixture("Branch.json").then((data)=>
        {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })


    it('Branch List', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickBranch()
        cy.wait(4000)
        BranchMenu.InputReportDate(APUPPT.ReportDate)
        cy.wait(4000)
        BranchMenu.InputInsertDate(APUPPT.InsertDate)
        cy.wait(4000)
        BranchMenu.InputIsActive(APUPPT.IsActive)
        cy.wait(4000)
        BranchMenu.InputBranchCodeParam(APUPPT.BranchCodeParam)
        cy.wait(4000)
        BranchMenu.InputBranchName(APUPPT.BranchName)
        cy.wait(4000)
        BranchMenu.InputMNEMonic(APUPPT.MNEMonic)
        cy.wait(4000)
        BranchMenu.InputBranchAddresParam(APUPPT.BranchAddresParam)
        cy.wait(4000)
        cy.xpath('//th[text()="Activation"]').scrollIntoView()
        cy.wait(4000)
        BranchMenu.ClickButtonViewDetail()
        cy.wait(4000)
        BranchMenu.ClickCancelEdit()
           
    
        // BranchMenu.ClickAddBranchButton()
        // BranchMenu.InputAddCountryCode(APUPPT.)
        // cy.wait(4000)
        // BranchMenu.InputProvinceDesc(APUPPT.)
        // BranchMenu.InputTownCountryDesc(APUPPT.)
        // cy.wait(4000)
        // BranchMenu.InputSubdistrictDesc(APUPPT.)
        // BranchMenu.InputVillageDesc(APUPPT.)
        // BranchMenu.InputZipCode(APUPPT.)
        // BranchMenu.InputBranchCode(APUPPT.)
        // BranchMenu.InputBranchAddres(APUPPT.)
        // BranchMenu.InputBranchDesc(APUPPT.)
        // BranchMenu.ClickIsHQ()
        // cy.wait(4000)
        // BranchMenu.ClickButtonSave()
        // cy.wait(6000)
        // BranchMenu.ClickOKButton()
        // cy.wait(4000)
        BranchMenu.InputBranchCodeParam(APUPPT.BranchCodeParam)
        cy.xpath('//th[text()="Activation"]').scrollIntoView()
        cy.wait(4000)
        BranchMenu.ClickButtonEdit()
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
        
    })

})