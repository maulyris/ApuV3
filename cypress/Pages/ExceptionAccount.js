class ExceptionAccount {

    element = {

        AccountListTab :() => cy.xpath ('//button[@id="home-tab"]'),
        MakeException :() => cy.xpath('//button[@id="btn-make-exception"]'),
        RemarkColumn :() => cy.xpath('//form[@class="form_remark_exception"]/div/div/textarea'),
        SubmitRemark :() => cy.xpath ('//button[@id="btn-save-make-exception"]'),
        YesSubmit :() => cy.xpath ('//button[text()="Yes, make exception!"]'),
        OKButton :() => cy.xpath('//button[@class="swal2-confirm btn btn-success swal2-styled"]'),
        ButtonViewDetail :() => cy.xpath ('(//a[@title="Log"])[1]'),
        ButtonCloseList :() => cy.xpath ('(//button[@class="btn btn-light"])[4]'),
        BankDescList :() => cy.xpath('(//input[@data-type="bank-type"])[1]'),
        CustomerIDList :() => cy.xpath('(//input[@data-type="customer-id"])[1]'),
        CustomerNameList :() => cy.xpath('(//input[@data-type="customer-name"])[1]'),
        BranchDescList :() => cy.xpath('(//input[@data-type="branch-name"])[1]'),
        CTRList :() => cy.xpath('(//input[@class="form-check-input chk_ctr"])[1]'),
        UTRList :() => cy.xpath('(//input[@class="form-check-input chk_str"])[1]'),
        ButtonExportList :() => cy.xpath ('//div[@id="home"]/div/div/a'),

        AccountException :() => cy.xpath('//button[@id="profile-tab"]'),
        CancelException :() => cy.xpath('//button[@id="btn-cancel-exception"]'),
        ButtonEditRemark :() => cy.xpath('(//a[@class="btn btn-icon btn-secondary btn-sm btn_remark"])[1]'),
        InputRemark :() => cy.xpath('(//textarea[@name="remarks"])[1]'),
        ButtonSaveRemark :() => cy.xpath('//button[@id="btn_save_remark"]'),
        ButtonLogException :() => cy.xpath('(//div[@id="myTabContent"]/div[2]/div/div[2]/div/div/table/tbody/tr/td[2]/div/a[2])[1]'),
        ButtonCloseLog :() => cy.xpath ('//div[@role="dialog"]//button[@type="button"][normalize-space()="Close"]'),
        RemarkCancelException :() => cy.xpath ('//form[@class="form_remark_cancel_exception"]/div/div/textarea'),
        SubmitRemarkCancel :() => cy.xpath('//button[@id="btn-save-cancel-exception"]'),
        YesSubmitCancel :() => cy.xpath ('//button[text()="Yes, cancel exception!"]'),
        BankDescException :() => cy.xpath('(//input[@data-type="bank-type"])[2]'),
        CustomerIDException :() => cy.xpath('(//input[@data-type="customer-id"])[2]'),
        CustomerNameException :() => cy.xpath('(//input[@data-type="customer-name"])[2]'),
        BranchDescException :() => cy.xpath('(//input[@data-type="branch-name"])[2]'),
        CTRException :() => cy.xpath('(//input[@class="form-check-input chk_ctr"])[1]'),
        //CTRException :() => cy.get(':nth-child(3) > .form-check > .form-check-input'),
        UTRException :() => cy.xpath('(//input[@class="form-check-input chk_str"])[2]'),
        //UTRException :() => cy.get('#DataTables_Table_0 > tbody > .odd > :nth-child(4) > .form-check > .form-check-input'),
        ButtonExportException :() => cy.xpath ('//div[@id="profile"]/div/div/a')
    }


    ClickMakeException(){
        this.element.MakeException().click()
    }

    ClickAccountListTab(){
        this.element.AccountListTab().click()
    }

    InputRemarkColumn(RemarkColumn){
        this.element.RemarkColumn().type(RemarkColumn)
    }

    ClickSubmitRemark(){
        this.element.SubmitRemark().click()
    }

    ClickYesSubmit(){
        this.element.YesSubmit().click()
    }

    ClickOKButton(){
        this.element.OKButton().click()
    }
    
    ClickButtonViewDetail(){
        this.element.ButtonViewDetail().click()
    }

    ClickButtonCloseList(){
        this.element.ButtonCloseList().click()
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

    SearchingBankDescList(BankDescList){
        this.element.BankDescList().type(BankDescList).type('{enter}')
    }

    ClickCTRList(){
        this.element.CTRList().click()
    }

    ClickUTRList(){
        this.element.UTRList().click()
    }

    ClickButtonExportList(){
        this.element.ButtonExportList().
        invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/exception/account_exception/to_csv').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/exception/account_exception'); 
        })
    }

//                                    _       ______                    _   _             
//     /\                            | |     |  ____|                  | | (_)            
//    /  \   ___ ___ ___  _   _ _ __ | |_    | |__  __  _____ ___ _ __ | |_ _  ___  _ __  
//   / /\ \ / __/ __/ _ \| | | | '_ \| __|   |  __| \ \/ / __/ _ \ '_ \| __| |/ _ \| '_ \ 
//  / ____ \ (_| (_| (_) | |_| | | | | |_    | |____ >  < (_|  __/ |_) | |_| | (_) | | | |
// /_/    \_\___\___\___/ \__,_|_| |_|\__|   |______/_/\_\___\___| .__/ \__|_|\___/|_| |_|
//                                                               | |                      
//                                                               |_|                      

    ClickAccountException(){
        this.element.AccountException().click()
    }

    ClickCancelException(){
        this.element.CancelException().click()
    }

    ClickButtonEditRemark(){
        this.element.ButtonEditRemark().click()
    }

    ClickButtonSaveRemark(){
        this.element.ButtonSaveRemark().click()
    }

    ClickButtonLogException(){
        this.element.ButtonLogException().click()
    }

    ClickButtonCloseLog(){
        this.element.ButtonCloseLog().click()
    }

    InputRemarkCancelException(RemarkCancelException){
        this.element.RemarkCancelException().type(RemarkCancelException)
    }

    ClickSubmitRemarkCancel(){
        this.element.SubmitRemarkCancel().click()
    }

    ClickInputRemark(InputRemark){
        this.element.InputRemark().type(InputRemark).type('{enter}')
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

    SearchingBranchDescException(BranchDescException){
        this.element.BranchDescException().type(BranchDescException).type('{enter}')
    }

    SearchingkBankDescException(BankDescException){
        this.element.BankDescException().type(BankDescException).type('{enter}')
    }

    ClickCTRException(){
        this.element.CTRException().click()
    }

    ClickUTRException(){
        this.element.UTRException().click()
    }

    ClickButtonExportList(){
        this.element.ButtonExportList().
        invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/exception/account_exception/to_csv2').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/exception/account_exception'); 
        })
    }

    ClickButtonExportException(){
        this.element.ButtonExportException().click()
    }
}
export default ExceptionAccount
