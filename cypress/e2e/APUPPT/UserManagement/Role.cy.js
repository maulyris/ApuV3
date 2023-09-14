import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import RolePage from "../../../Pages/RolePage"


let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let Role = new RolePage


describe ('Menu Role', () => {

    before('Link Visit', () => {
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Role List', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickUserManagement()
        Menu.ClickRole()
        cy.wait(2000)
        Role.ClickCloseBugButton()
        cy.wait(2000)
        Role.ClickAddRoleButton()
        Role.InputAddRoleName('Jiarsi Testing')
        Role.InputAddRoleDesc('SPV')
        Role.InputAddRoleLevel('4')
        Role.ClickAddRoleType()
        Role.InputValueData('Kantor Pusat')
        Role.ClickSaveAddRole()
        Role.ClickOKButton()
        cy.wait(4000)
        Role.InputRoleName('Jiarsi Testing')
        Role.InputRoleDesc('SPV')
        cy.wait(2000)
        Role.ClickMenuRole()
        Role.ClickDashboard()
        Role.ClickUserManagement()
        Role.ClickLogActivity()
        Role.ClickSetting()
        Role.ClickMenuManagement()
        Role.ClickVisualizationDashboard()
        Role.ClickApplicationSetup()
        Role.ClickGeneralnfo()
        Role.ClickWorkflow()
        Role.ClickMonitoring()
        Role.ClickScreening()
        Role.ClickRegulatoryReport()
        Role.ClickReport()
        Role.ClickCustomerOnBoarding()
        Role.ClickUpload()
        cy.wait(2000)
        Role.ClickSaveMenuRole()
        cy.wait(4000)
        Role.InputRoleName('Jiarsi Testing')
        Role.InputRoleDesc('SPV')
        Role.ClickEditRole()
        cy.wait(2000)
        cy.xpath('(//input[@id="role_name"])[2]').clear()
        Role.InputEditRoleName('Jiarsi Edit')
        cy.xpath('(//input[@id="role_desc"])[2]').clear()
        Role.InputEditRoleDesc('Superadmin')
        cy.xpath ('(//input[@name="role_level"])[3]').clear()
        Role.InputEditRoleLevel('3')
        Role.ClickEditRole()
        Role.InputValueData('Cabang')
        Role.ClickSaveEditButton()
        Role.ClickOKButton()
    })


    it.only('Role List', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickUserManagement()
        Menu.ClickRole()
        cy.wait(2000)
        Role.InputRoleName('Jiarsi Testing')
        Role.InputRoleDesc('SPV')
        Role.ClickEditRole()
        cy.wait(2000)
        cy.xpath('(//input[@id="role_name"])[2]').clear()
        Role.InputEditRoleName('Jiarsi Edit')
        cy.xpath('(//input[@id="role_desc"])[2]').clear()
        Role.InputEditRoleDesc('Superadmin')
        cy.xpath ('(//input[@name="role_level"])[3]').clear()
        Role.InputEditRoleLevel('3')
        Role.ClickEditRole()
        Role.InputValueData('Cabang')
        Role.ClickSaveEditButton()
        Role.ClickOKButton()
    })
})