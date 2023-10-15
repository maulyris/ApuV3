class ExceptionCustomer {
 
    element = {
        CustomerListTab :() => cy.xpath('//button[@id="home-tab"]'),
        MakeException :() => cy.xpath('//button[@id="btn-make-exception"]'),
        RemarkColumn :() => cy.xpath('//form[@class="form_remark_exception"]/div/div/textarea'),
        SubmitRemark :() => cy.xpath ('//button[@id="btn-save-make-exception"]'),
        YesSubmit :() => cy.xpath ('//button[text()="Yes, make exception!"]'),
        OKButton :() => cy.xpath('//button[@class="swal2-confirm btn btn-success swal2-styled"]'),
        LogCustomerList :() => cy.xpath ('(//a[@title="Log"])[1]'),
        ButtonCloseList :() => cy.xpath ('(//button[@type="button"][normalize-space()="Close"])[4]'),
        CustomerIDList :() => cy.xpath('//thead[@id="elm_thead_cust"]/tr[2]/th[5]'),
        CustomerNameList :() => cy.xpath('//thead[@id="elm_thead_cust"]/tr[2]/th[6]'),
        BranchDescList :() => cy.xpath('//thead[@id="elm_thead_cust"]/tr[2]/th[7]'),
        BankDescList :() => cy.xpath('//thead[@id="elm_thead_cust"]/tr[2]/th[8]'),
        CTRList :() => cy.xpath('(//input[@class="form-check-input chk_ctr"])[1]'),
        UTRList :() => cy.xpath('(//input[@class="form-check-input chk_str"])[1]'),
        ButtonExportList :() => cy.xpath ('//div[@id="home"]/div/div/a'),
 
        CustomerException :() => cy.xpath('//button[@id="profile-tab"]'),
        CancelException :() => cy.xpath('//button[@id="btn-cancel-exception"]'),
        ButtonEditRemark :() => cy.xpath('//a[@class="btn btn-icon btn-secondary btn-sm btn_remark mad-tooltip"]'),
        ButtonYes :()=> cy.xpath('//button[@class="swal2-confirm btn btn-success swal2-styled"]'),
        ButtonSaveRemark :() => cy.xpath('//button[@id="btn_save_remark"]'),
        ButtonLogException :() => cy.xpath('(//div[@id="myTabContent"]/div[2]/div/div[2]/div/div/table/tbody/tr/td[2]/div/a[2])[1]'),
        ButtonCloseLog :() => cy.xpath ('//div[@role="dialog"]//div[@class="modal-footer"]/button'),
        RemarkCancelException :() => cy.xpath('//form[@class="form_remark_cancel_exception"]/div/div/textarea'),
        SubmitRemarkCancel :() => cy.xpath('//button[@id="btn-save-cancel-exception"]'),
        YesSubmitCancel :() => cy.xpath ('//button[text()="Yes, cancel exception!"]'),
        CustomerIDException :() => cy.xpath('//thead[@id="elm_thead_exception"]/tr[2]/th[6]'),
        CustomerNameException :() => cy.xpath('//thead[@id="elm_thead_exception"]/tr[2]/th[7]'),
        BranchDescException :() => cy.xpath('//thead[@id="elm_thead_exception"]/tr[2]/th[8]'),
        BankDescException :() => cy.xpath('//thead[@id="elm_thead_exception"]/tr[2]/th[5]'),
        CTRException :() => cy.xpath('(//div[@id="profile"]/div/div[2]/div/div/table/tbody/tr/td[3]/div)[1]'),
        UTRException :() => cy.xpath('(//div[@id="profile"]/div/div[2]/div/div/table/tbody/tr/td[4]/div)[1]'),
        ButtonExportException :() => cy.xpath ('//div[@id="profile"]/div/div/a')
    }

    ClickCustomerListTab(){
        this.element.CustomerListTab().click()
    }

    ClickMakeException(){
        this.element.MakeException().click()
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

    ClickLogCustomerList(){
        this.element.LogCustomerList().click()
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
        invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/exception/customer_exception/to_csv').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/exception/customer_exception'); 
        })
    }

//                _                                                     _   _                                                        _ 
//               | |                                                   | | (_)                                                      | |
//  ___ _   _ ___| |_ ___  _ __ ___   ___ _ __   _____  _____ ___ _ __ | |_ _  ___  _ __     __ _ _ __  _ __  _ __ _____   _____  __| |
// / __| | | / __| __/ _ \| '_ ` _ \ / _ \ '__/ / _ \ \/ / __/ _ \ '_ \| __| |/ _ \| '_ \   / _` | '_ \| '_ \| '__/ _ \ \ / / _ \/ _` |
//| (__| |_| \__ \ || (_) | | | | | |  __/ |   |  __/>  < (_|  __/ |_) | |_| | (_) | | | | | (_| | |_) | |_) | | | (_) \ V /  __/ (_| |
// \___|\__,_|___/\__\___/|_| |_| |_|\___|_|    \___/_/\_\___\___| .__/ \__|_|\___/|_| |_|  \__,_| .__/| .__/|_|  \___/ \_/ \___|\__,_|
//                                                               | |                             | |   | |                             
//                                                               |_|                             |_|   |_|                                                                                                                                 

    ClickCustomerException(){
        this.element.CustomerException().click()
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

    ClickButtonYes(){
        this.element.ButtonYes().click()
    }

    ClickButtonLogException(){
        this.element.ButtonLogException().click()
    }

    ClickButtonCloseLog(){
        this.element.ButtonCloseLog().click()
    }

    InputRemarkCancelException(RemarkCancelException){
        this.element.RemarkCancelException().type(RemarkCancelException).type('{enter}')
    }

    ClickSubmitRemarkCancel(){
        this.element.SubmitRemarkCancel().click()
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

    ClickButtonExportException(){
        this.element.ButtonExportException().
        invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/exception/customer_exception/to_csv2').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/exception/customer_exception'); 
        })
    }

}
export default ExceptionCustomer
