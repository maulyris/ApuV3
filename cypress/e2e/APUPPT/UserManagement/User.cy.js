import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import UserPage from "../../../Pages/UserPage"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let User = new UserPage


describe ('Menu User', () => {

    before('Link Visit', () => {
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('User List', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickUserManagement()
        Menu.ClickUser()
        cy.wait(4000)
        User.ClickButtonAddUser()
        cy.wait(4000)
        User.InputAddEmployeeNumber('1234567890')
        User.InputAddFullName('Jiarsi Testing')
        User.InputAddUserName('Jiarsitest1')
        cy.wait(2000)
        User.InputAddEmail('Jiarsi@gmail.com')
        User.InputAddEmail('Jiarsi@gmail.com')
        User.ClickAddRole()
        User.InputValueData('superuser')
        User.ClickAddBranchName()
        User.InputValueData('Kantor Pusat')
        User.ClickAddPasswordAssign()
        User.InputValueData('Default Password')
        User.ClickSaveAddButton()
        cy.wait(2000)
        User.ClickOKButton()
        cy.wait(4000)
        User.InputEmployeeNumber('1234567890')
        User.InputFullName('Jiarsi Testing')
        User.InputUserName('Jiarsitest')
        User.InputRole('Superuser')
        User.InputStatus('DISABLED')
        User.InputLockedStatus('Open')
        cy.wait(4000)
        User.ClickActionButton()
        User.ClickViewDetalButton()
        cy.wait(4000)
        User.ClickCloseButton()
        User.ClickActionButton()
        User.ClickEditButton()
        cy.wait(4000)
        cy.xpath ('(//input[@id="employee_number"])[2]').clear()
        User.InputEditEmployeeNumber('1234567890')
        cy.xpath ('(//input[@id="full_name"])[2]').clear()
        User.InputEditFullName('Jiarsi Testing ')
        cy.xpath ('(//input[@id="email"])[2]').clear()
        User.InputEditEmail('JiarsiEdit@gmail.com')
        User.ClickEditRole()
        User.InputValueData('spv_kp')
        User.ClickEditBranchName()
        User.InputValueData('Kantor Cabang Utama')
        User.ClickSaveEditButton()
        User.ClickOKEditButton()
        cy.wait(4000)
        User.ClickActionButton()
        User.ClickResetPasswordButton()
        User.ClickYesResetButton()
        User.ClickOKButton()
        User.ClickActiveButton()
        User.ClickYesActivateButon()
        
        
    })

})

