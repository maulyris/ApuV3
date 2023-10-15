import LoginPage from "../../../Pages/loginPage"
import LogoutPage from "../../../Pages/LogoutPage"
import MenuElement from "../../../Pages/Menu"
import ExceptionCustomer from "../../../Pages/ExceptionCustomer"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let CustomerException = new ExceptionCustomer

 
describe ('Customer Exception', ()=>{

    let APUPPT;
    
    before('Link Visit',() => {
        cy.fixture("Customer_Exception.json").then((data) => {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser3')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Customer Exception List', () => {
        cy.xpath('//a[@class="text-black text-hover-primary"]').should('be.visible')
        Menu.ClickGeneralInfo()
        Menu.ClickException()
        Menu.ClickCustomerException()
        cy.wait(6000)


//SEARCHING CUSTOMER IN CUSTOMER LIST
        CustomerException.ClickCustomerListTab()
        cy.wait(4000)
        CustomerException.SearchingCustomerIDList(APUPPT.CustomerID)
        cy.wait(12000)
        //CustomerException.SearchingCustomerNameList(APUPPT.CustomerName)
        //cy.wait(70000)
        //CustomerException.SearchingBranchDescList(APUPPT.BranchName)
        //cy.wait(4000)
        //CustomerException.SearchingBankDescList(APUPPT.BankType)
        //cy.wait(6000)
        //CustomerException.ClickLogCustomerList()
        //cy.wait(4000)
        //CustomerException.ClickButtonCloseList()
        //cy.wait(4000)
        CustomerException.click

// MAKE CUSTOMER EXCEPTION
        CustomerException.ClickCTRList()
        CustomerException.ClickUTRList()
        CustomerException.ClickMakeException()
        cy.wait(4000)
        CustomerException.InputRemarkColumn(APUPPT.Remark)
        cy.wait(4000)
        CustomerException.ClickSubmitRemark()
        cy.wait(3000)
        CustomerException.ClickYesSubmit()
        cy.wait(4000)
        CustomerException.ClickOKButton()
        cy.wait(4000)
        CustomerException.ClickButtonExportList()
        cy.wait(4000)
        cy.fixture("Customer_Exception.json").then((data) => {
            APUPPT=data;
        })

//                _                                                     _   _                                                        _ 
//               | |                                                   | | (_)                                                      | |
//  ___ _   _ ___| |_ ___  _ __ ___   ___ _ __   _____  _____ ___ _ __ | |_ _  ___  _ __     __ _ _ __  _ __  _ __ _____   _____  __| |
// / __| | | / __| __/ _ \| '_ ` _ \ / _ \ '__/ / _ \ \/ / __/ _ \ '_ \| __| |/ _ \| '_ \   / _` | '_ \| '_ \| '__/ _ \ \ / / _ \/ _` |
//| (__| |_| \__ \ || (_) | | | | | |  __/ |   |  __/>  < (_|  __/ |_) | |_| | (_) | | | | | (_| | |_) | |_) | | | (_) \ V /  __/ (_| |
// \___|\__,_|___/\__\___/|_| |_| |_|\___|_|    \___/_/\_\___\___| .__/ \__|_|\___/|_| |_|  \__,_| .__/| .__/|_|  \___/ \_/ \___|\__,_|
//                                                               | |                             | |   | |                             
//                                                               |_|                             |_|   |_|                                                                                                                                 

//SEARCHING Customer Exception Approved
        cy.scrollTo('top')
        CustomerException.ClickCustomerException()
        cy.wait(4000)
        CustomerException.SearchingCustomerIDException(APUPPT.CustomerID)
        cy.wait(12000)
        //CustomerException.SearchingCustomerNameException(APUPPT.CustomerName)
        //cy.wait(70000)
        //CustomerException.SearchingBranchDescException(APUPPT.BranchName)
        //cy.wait(6000)
        //CustomerException.SearchingkBankDescException(APUPPT.BankType)
        //cy.wait(6000)
        //CustomerException.ClickButtonEditRemark(APUPPT.RemarkEdit)        
        //cy.wait(4000)
       // CustomerException.ClickButtonSaveRemark()
        //cy.wait(4000)
        //CustomerException.ClickOKButton()
        //cy.wait(4000)
        //CustomerException.ClickButtonLogException()
        //CustomerException.ClickButtonCloseList()
       // cy.wait(4000)
        CustomerException.ClickCTRException()
        CustomerException.ClickUTRException()
        cy.wait(6000)
        CustomerException.ClickCancelException()
        cy.wait(6000)
        CustomerException.InputRemarkCancelException(APUPPT.CancelRemark)
        cy.wait(4000)
        CustomerException.ClickSubmitRemarkCancel()
        cy.wait(9000)
        CustomerException.ClickYesSubmitCancel()
        cy.wait(9000)
        CustomerException.ClickOKButton()
        cy.wait(7000)
        CustomerException.ClickButtonExportException()
        cy.wait(4000)
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
        cy.wait(4000)
    })
})