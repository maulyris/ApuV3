import LoginPage from "../../../Pages/loginPage"
import MenuElement from "../../../Pages/Menu"
import LogoutPage from "../../../Pages/LogoutPage"
import ProfileWIC from "../../../Pages/ProfileWIC"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let WIC = new ProfileWIC


describe('Profile WIC', ()=>{

let APUPPT;

    before ('Link APUPPT V5',() => {
        cy.fixture("Profile_WIC.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser3')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })
 
    it('Mangement List',()=> 
    {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickGeneralInfo()
        Menu.ClickProfile()
        Menu.ClickProfileWalkInCustomer()
        cy.wait(4000)
        WIC.SearchingWICID(APUPPT.WICID)
        cy.wait(4000)
        WIC.SearchingWICName(APUPPT.WICName)
        cy.wait(4000)
        // WIC.SearchingBranchDesc(APUPPT.BranchDesc)
        // cy.wait(4000)
        // WIC.SearchingGenderDesc(APUPPT.GenderDesc)
        // cy.wait(4000)
        WIC.SearchingNationalityCode(APUPPT.NationalityCode)
        cy.wait(4000)
        WIC.SearchingIdentityTypeCode(APUPPT.IdentityTypeCode)
        cy.wait(4000)
        WIC.SearchingIdentityNumber(APUPPT.IdentityNumber)
        cy.wait(4000)
        // WIC.SearchingOccupationDesc(APUPPT.OccupationDesc)
        // cy.wait(4000)
        // WIC.SearchingLineofBusinessDesc(APUPPT.LineofBusinessDesc)
        // cy.wait(4000)
        WIC.SearchingSourceofFundCode(APUPPT.SourceofFundCode)
        cy.wait(4000)
        // WIC.SearchingIncomeCode(APUPPT.IncomeCode)
        // cy.wait(4000)
        // WIC.SearchingIncomeDesc(APUPPT.IncomeDesc)
        // cy.wait(4000)
        // WIC.SearchingAddress(APUPPT.Address)
        // cy.wait(4000)
        WIC.ClickButtonViewDetail()
        cy.wait(4000)
        WIC.ClickCloseButton()
        cy.scrollTo('top')
        cy.wait(4000)
        WIC.ClickExportButton()
        cy.wait(4000)
        WIC.ClickExportBranch()
        WIC.ClickInputBranch(APUPPT.BranchDesc)
        cy.wait(4000)
        WIC.ClickExportCSV()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})