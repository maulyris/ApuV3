import LoginPage from "../../Pages/loginPage"
import LogoutPage from "../../Pages/LogoutPage"
import MenuElement from "../../Pages/Menu"
import CustomerOnboardingPage from "../../Pages/CustomerOnboarding"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let CustomerOnboarding = new CustomerOnboardingPage



describe ('Menu Report', () => {

    before('Link Visit', () => {
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Export Report APUPPT', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickCustomerOnBoarding()
        cy.wait(4000)
        CustomerOnboarding.ClickOnboardingListTab()
        CustomerOnboarding.InputSearchingCustomerName('Muhammad')
        CustomerOnboarding.ClickButtonSubmit()
        cy.wait(6000)
        CustomerOnboarding.InputCreatedByName('superuser2')
        //CustomerOnboarding.InputCreatedByBranch('')
        CustomerOnboarding.InputCreatedOn('2023-02-20')
        CustomerOnboarding.InputProcessStatus('PROCESS SUCCESS')
        CustomerOnboarding.InputResultStatus('PROCESS SUCCESS')
        CustomerOnboarding.InputCustomerName('Muhammad')

        CustomerOnboarding.ClickHistoryTab()
        cy.wait(6000)
        CustomerOnboarding.InputCustomerNameHistory('superuser2')
        CustomerOnboarding.InputCreatedOnHistory('2022-12-21')
        CustomerOnboarding.InputProcessStatusHistory('PROCESS SUCCESS')
        CustomerOnboarding.InputResultStatusHistory('PROCESS SUCCESS')
        CustomerOnboarding.InputCustomerNameHistory('Mahmud')
        cy.get('#tableHistory > :nth-child(1) > .sorting_asc_disabled.sorting_disabled').scrollIntoView()
        CustomerOnboarding.ClickViewDetail()

    })

})