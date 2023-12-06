class ExceptionAccount {

    element = {

        AccountListTab :() => cy.xpath ('(//a[normalize-space()="Account List"])[1]'),
        MakeException :() => cy.xpath('//button[@id="btn-make-exception"]'),
        YesMakeException :() => cy.xpath ('//button[normalize-space()="Yes, make exception!"]'),
        OKButton :() => cy.xpath('(//button[normalize-space()="OK"])[1]'),
        CustomerIDList :() => cy.xpath('(//input[@id="search-customer-id"])[1]'),
        CustomerNameList :() => cy.xpath('(//input[@id="search-account-name"])[1]'),
        BranchDescList :() => cy.xpath('(//input[@id="search-branch-name"])[1]'),
        AccountNumberList :() => cy.xpath('(//input[@id="search-account-number"])[1]'),
        AccountDescList :() => cy.xpath('(//input[@id="search-product-desc"])[1]'),
        CTRList :() => cy.xpath('//input[@id="chk_ctr"]'),
        UTRList :() => cy.xpath('//input[@id="chk_str"]'),

        AccountExceptionTab :() => cy.xpath('//a[normalize-space()="Account Exception List"]'),
        CancelException :() => cy.xpath('//button[@id="btn-cancel-exception"]'),
        YesCancelException :() => cy.xpath ('//button[text()="Yes, cancel exception!"]'),
        CustomerIDException :() => cy.xpath('(//input[@data-type="customer-id"])[2]'),
        CustomerNameException :() => cy.xpath('(//input[@data-type="customer-name"])[2]'),
        AccountNumberException :() => cy.xpath ('(//input[@id="search-account-number"])[2]'),
        AccountDescException :() => cy.xpath ('(//input[@id="search-product-desc"])[2]'),
        BranchNameException :() => cy.xpath('((//input[@id="search-branch-name"])[2]'),
        Author :() => cy.xpath ('//input[@id="search-created-by-name"]'),
        DateException :() => cy.xpath ('//input[@id="search-acc-created-on"]'),
        CTRException :() => cy.xpath('//input[@id="chk_ex_ctr"]'),
        UTRException :() => cy.xpath('//input[@id="chk_ex_str"]')
    }

    ClickAccountExceptionTab(){
        this.element.AccountExceptionTab().click()
    }

    ClickMakeException(){
        this.element.MakeException().click()
    }

    ClickYesMakeException(){
        this.element.YesMakeException().click()
    }

    ClickOKButton(){
        this.element.OKButton().click()
    }

    SearchingCustomerIDList(CustomerIDList){
        this.element.CustomerIDList().type(CustomerIDList).type('{enter}')
    }

    SearchingCustomerNameList(CustomerNameList){
        this.element.CustomerNameList().type(CustomerNameList).type('{enter}')
    }

    SearchingBranchDescList(BranchDescList){
        this.element.BranchDescList().type(BranchDescList).type('{enter}')
    }

    SearchingAccountNumberList(AccountNumberList){
        this.element.AccountNumberList().type(AccountNumberList).type('{enter}')
    }

    SearchingAccountDescList(AccountDescList){
        this.element.AccountDescList().type(AccountDescList).type('{enter}')
    }

    ClickCTRList(){
        this.element.CTRList().click()
    }

    ClickUTRList(){
        this.element.UTRList().click()
    }

//                                    _       ______                    _   _             
//     /\                            | |     |  ____|                  | | (_)            
//    /  \   ___ ___ ___  _   _ _ __ | |_    | |__  __  _____ ___ _ __ | |_ _  ___  _ __  
//   / /\ \ / __/ __/ _ \| | | | '_ \| __|   |  __| \ \/ / __/ _ \ '_ \| __| |/ _ \| '_ \ 
//  / ____ \ (_| (_| (_) | |_| | | | | |_    | |____ >  < (_|  __/ |_) | |_| | (_) | | | |
// /_/    \_\___\___\___/ \__,_|_| |_|\__|   |______/_/\_\___\___| .__/ \__|_|\___/|_| |_|
//                                                               | |                      
//                                                               |_|                      

    ClickAccountExceptionTab(){
        this.element.AccountExceptionTab().click()
    }

    ClickCancelException(){
        this.element.CancelException().click()
    }

    ClickYesSubmitCancel(){
        this.element.YesSubmitCancel().click()
    }

    SearchingCustomerIDException(CustomerIDException){
        this.element.CustomerIDException().type(CustomerIDException).type('{enter}')
    }

    SearchingCustomerNameException(CustomerNameException){
        this.element.CustomerNameException().type(CustomerNameException).type('{enter}')
    }

    SearchingAccountNumberException(AccountNumberException){
        this.element.AccountNumberException().type(AccountNumberException).type('{enter}')
    }

    SearchingAccountDescException(AccountDescException){
        this.element.AccountDescException().type(AccountDescException).type('{enter}')
    }

    SearchingBranchNameException(BranchNameException){
        this.element.BranchNameException().type(BranchNameException).type('{enter}')
    }

    SearchingAuthor(Author){
        this.element.Author().type(Author).type('{enter}')
    }

    SearchingDateException(DateException){
        this.element.DateException().type(DateException).type('{enter}')
    }

    ClickCTRException(){
        this.element.CTRException().click()
    }

    ClickUTRException(){
        this.element.UTRException().click()
    }
}
export default ExceptionAccount
