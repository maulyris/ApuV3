import LoginPage from "../../../Pages/loginPage"
import MenuElement from "../../../Pages/Menu"
import LogoutPage from "../../../Pages/LogoutPage"
import ProfileBO from "../../../Pages/ProfileBO"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let BO = new ProfileBO


describe('Profile BO', ()=>{

    let APUPPT;

    before ('Link APUPPT V5',() => {
        cy.fixture("Profile_BO.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })
 
    // after('Log Out', ()=>{
    //     cy.wait(4000)
    //     Logout.ClickAvatarLogout()
    //     Logout.ClickButtonLogout()
    // })

    it('Beneficial Owner List',()=> 
    {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
// Searching Data Beneficial owner
        Menu.ClickGeneralInfo()
        Menu.ClickProfile()
        Menu.ClickProfileBeneficialOwner(APUPPT.CustomerID)
        cy.wait(4000)
        // BO.SearchingCustomerID(APUPPT.CustomerID)
        // cy.wait(10000)
        // BO.SearchingCustomerType(APUPPT.CustomerType)
        // cy.wait(10000)
        // BO.SearchingCustomerName(APUPPT.CustomerName)
        // cy.wait(10000)
        // BO.SearchingBranchCode(APUPPT.BranchCode)
        // cy.wait(10000)
        // BO.SearchingBranchName(APUPPT.BranchDesc)
        // cy.wait(10000)
        // BO.SearchingBOName(APUPPT.BOName)
        // cy.wait(10000)
        BO.ClickButtonViewDetail()
        cy.wait(4000)
        BO.ClickCloseButtonDetail()
        BO.ClickRBABO()
        cy.wait(4000)    
        // BO.ClickCloseButtonBO()
        cy.scrollTo('top')
        cy.wait(4000)
        BO.ClickExportButton()
        cy.wait(4000)
        BO.ClickExportBranch()
        BO.InputDataBranch(APUPPT.BranchExport)
        cy.wait(4000)
        BO.ClickExportCustomer()
        BO.InputDataCustomerType(APUPPT.CustomerTypeExport)
        cy.wait(4000)
        BO.ClickExportCSV()
        cy.wait(4000)
        BO.ClickPrintReport()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})