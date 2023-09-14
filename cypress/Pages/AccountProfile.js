class AccountProfile {
    element={
        CustomerID:() => cy.xpath('//input[@data-type="customer-id"]'),
        CustomerName :() => cy.xpath('//input[@data-type="customer-name"]'),
        TotalAccount :() => cy.xpath ('//input[@data-type="total-account"]'),
        ActionButton :() => cy.xpath ('(//button[@class="btn btn-icon btn-sm btn-secondary btn-view mad-tooltip"])[1]'),
        DetailCustomer :() => cy.xpath ('(//button[@title="Detail Customer"])[1]'),
        CloseDetailAccount :() => cy.xpath ('(//button[@type="button"][normalize-space()="Cancel"])[1]'),
        ExportButton :() => cy.xpath('//div[@id="kt_app_toolbar_container"]/a'),
        BranchExport :() => cy.xpath ('//span[@id="select2-branchcode-container"]'),
        ProductExport :() => cy.xpath ('//span[@id="select2-productcode-container"]'),
        OpeningDate:() => cy.xpath('//input[@id="openingdate"]'),
        ApplyButton :() => cy.xpath('//button[@class="applyBtn btn btn-sm btn-primary"]'),
        SaveExport:() => cy.xpath ('//button[@id="btn-yes-export"]'),
        CancelExport :() => cy.xpath ('(//button[@type="button"][normalize-space()="Cancel"])[3]'),
        ValueData :() => cy.xpath ('(//input[@role="searchbox"])[1]'),

        CustomerIDAcc :() => cy.xpath('(//input[@data-type="customer-id"])[2]'),
        CustomerNameAcc :() => cy.xpath('(//input[@data-type="customer-name"])[2]'),
        ProductCodeAcc :() => cy.xpath('//input[@data-type="product-code"]'),
        ProductAcc :() => cy.xpath('//input[@data-type="product"]'),
        OpeningDateAcc :() => cy.xpath('//input[@data-type="opening-date"]'),
        AccountNumberAcc :() => cy.xpath('//input[@data-type="account-number"]'),
        BranchCode :() => cy.xpath('//input[@data-type="branch-code"]'),
        BranchName :() => cy.xpath('//input[@data-type="branch-name"]'),
        AccountName :() => cy.xpath('//input[@data-type="account-name"]')
    }

    InputCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }
    
    InputCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
    }
    
    InputTotalAccount(TotalAccount){
        this.element.TotalAccount().type(TotalAccount).type('{enter}')
    }
    
    ClickActionButton(){
        this.element.ActionButton().click()
    }
    
    ClickDetailCustomer(){
        this.element.DetailCustomer().click()
    }
    
    ClickCloseDetailAccount(){
        this.element.CloseDetailAccount().click()
    }
    
    ClickExportButton(){
        this.element.ExportButton().click()
    }
    
    ClickApplyButton(){
        this.element.ApplyButton().click()
    }

    ClickBranchExport(){
        this.element.BranchExport().click()
    }

    ClickProductExport(){
        this.element.ProductExport().click()
    }

    ClickOpeningDate(){
        this.element.OpeningDate().click()
    }

    ClickSaveExport(){
        this.element.SaveExport().
        invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/customer/account_profile/to_csv?branchcode=&productcode=&openingdate=').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/customer/account_profile'); 
        })
    }

    ClickCancelExport(){
        this.element.CancelExport().click()
    }

    InputValueData(ValueData){
        this.element.ValueData().type(ValueData).type('{enter}')
    }

    InputCustomerIDAcc(CustomerIDAcc){
        this.element.CustomerIDAcc().type(CustomerIDAcc).type('{enter}')
    }

    InputCustomerNameAcc(CustomerNameAcc){
        this.element.CustomerNameAcc().type(CustomerNameAcc).type('{enter}')
    }

    InputProductCodeAcc(ProductCodeAcc){
        this.element.ProductCodeAcc().type(ProductCodeAcc).type('{enter}')
    }

    InputProductAcc(ProductAcc){
        this.element.ProductAcc().type(ProductAcc).type('{enter}')
    }

    InputOpeningDateAcc(OpeningDateAcc){
        this.element.OpeningDateAcc().type(OpeningDateAcc).type('{enter}')
    }

    InputAccountNumberAcc(AccountNumberAcc){
        this.element.AccountNumberAcc().type(AccountNumberAcc).type('{enter}')
    }

    InputBranchCode(BranchCode){
        this.element.BranchCode().type(BranchCode).type('{enter}')
    }

    InputBranchName(BranchName){
        this.element.BranchName().type(BranchName).type('{enter}')
    }

    InputAccountName(AccountName){
        this.element.AccountName().type(AccountName).type('{enter}')
    }

}
export default AccountProfile