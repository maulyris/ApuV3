import LoginPage from "../../../Pages/loginPage"
import MenuElement from "../../../Pages/Menu"
import LogoutPage from "../../../Pages/LogoutPage"
import ProfileBlackList from "../../../Pages/ProfileBlackList"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let BlackList = new ProfileBlackList


describe('Profile Black List', ()=>{

    before ('Link APUPPT V5',() => {
        cy.visit('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser3')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    // after('Log Out', ()=>{
    //     cy.wait(4000)
    //     Logout.ClickAvatarLogout()
    //     Logout.ClickButtonLogout()
    // })

    it('Black List',()=> 
    {
        cy.get('.breadcrumb > :nth-child(1) > .text-muted').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickProfile()
        Menu.ClickProfileBlackListCustomer()
        cy.wait(4000)
        BlackList.SearchingReportDate('2023-01-14')
        //cy.wait(4000)
        BlackList.SearchingInsertDate('2023-01-18')
        //cy.wait(4000)
        BlackList.SearchingBankType('1')
        //cy.wait(4000)
        BlackList.SearchingBankDesc('CONVENT')
        //cy.wait(4000)
        //cy.scrollTo('right')
        BlackList.SearchingAuthoriser('188__INPUTTER')
        //cy.wait(4000)
        BlackList.SearchingBlackListCID('1')
        //cy.wait(4000)
        BlackList.SearchingBlackListCustomerName('A TARIS')
        cy.wait(4000)
        BlackList.SearchingBankName('BANK BNI')
        cy.wait(4000)
        BlackList.SearchingExpiredDate('2024-01-15')
        cy.wait(4000)
        BlackList.SearchingDHNNumber('2/01/23')
        cy.wait(4000)
        BlackList.SearchingDateTime('2301161404')
        cy.wait(4000)
        // BlackList.SearchingDHNTypeCode('')
        // cy.wait(4000)
        // BlackList.SearchingDHNTypeDesc('')        
        // cy.wait(4000)
        BlackList.ClickButtonViewDetail()
        cy.wait(4000)
        BlackList.ClickCloseButtonDetail()
        cy.wait(4000)
        BlackList.ClickExportButton()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})