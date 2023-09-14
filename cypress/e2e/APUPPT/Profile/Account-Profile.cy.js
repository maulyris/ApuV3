import LoginPage from "../../../Pages/loginPage"
import MenuElement from "../../../Pages/Menu"
import LogoutPage from "../../../Pages/LogoutPage"
import AccountProfile from "../../../Pages/AccountProfile"

let Login = new LoginPage 
let Logout = new LogoutPage
let Menu = new MenuElement
let ProfileAccount = new AccountProfile


describe('Profile Account', ()=>{

let APUPPT;
    
    before ('Link APUPPT V5',() => {
        cy.fixture("Profile_Account.json").then((data)=>{
            APUPPT=data;
        })
        cy.visit('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Account Page', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        cy.wait(4000)
        Menu.ClickGeneralInfo()
        Menu.ClickProfile()
        Menu.ClickProfileAccount()
        ProfileAccount.InputCustomerID(APUPPT.CustomerID)
        ProfileAccount.InputCustomerName(APUPPT.CustomerName)
        ProfileAccount.InputTotalAccount(APUPPT.TotalAccount)
        cy.wait(6000)
        ProfileAccount.ClickActionButton()
        cy.wait(4000)
        ProfileAccount.InputCustomerIDAcc(APUPPT.CustomerIDACC)
        ProfileAccount.InputCustomerNameAcc(APUPPT.CustomerNameACC)
        ProfileAccount.InputProductCodeAcc(APUPPT.ProductCodeACC)
        ProfileAccount.InputProductAcc(APUPPT.ProductACC)
        ProfileAccount.InputOpeningDateAcc(APUPPT.OpeningDateACC)
        ProfileAccount.InputAccountNumberAcc(APUPPT.AccountNumberACC)
        ProfileAccount.InputBranchCode(APUPPT.BranchCode)
        ProfileAccount.InputBranchName(APUPPT.BranchName)
        ProfileAccount.InputAccountName(APUPPT.AccountName)
        ProfileAccount.ClickCloseDetailAccount()
        cy.wait(4000)
        ProfileAccount.ClickExportButton()
        ProfileAccount.ClickBranchExport()
        ProfileAccount.InputValueData(APUPPT.Branch)
        ProfileAccount.ClickProductExport()
        ProfileAccount.InputValueData(APUPPT.Product)
        ProfileAccount.ClickOpeningDate(APUPPT.OpeningDate)
        ProfileAccount.ClickApplyButton()
        ProfileAccount.ClickSaveExport()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })
})
    