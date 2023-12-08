class CustomerEdd {
    element={
        CustomerID:() => cy.xpath('//input[@id="search-customer-id"]'),
        FullName:() => cy.xpath('//input[@id="search-full-name"]'),
        BranchName:() => cy.xpath("//input[@id='search-branch-name']"),
        BankType:() => cy.xpath("//span[@id='select2-search-bank-desc-container']"),
        SearchBankType:() => cy.xpath("//input[@role='searchbox']"),
        CustomerType:() => cy.xpath("//input[@id='search-customer-type-desc']"),
        CIFCreated:() => cy.xpath("//input[@id='search-cif-created-on']"),
        IdentityCardNumber:() => cy.xpath("//input[@id='search-identity-card-number']"),
        Occupation:() => cy.xpath("//input[@id='search-occupation-business-desc']"),
        TypeRisk:() => cy.xpath("//span[@id='select2-search_rba_final_risk_type_desc-container']"), 
        SearchTypeRisk:()=> cy.xpath('//input[@type="search"]'),
        ButtonAction:() => cy.xpath('(//button[@class="btn btn-primary btn-icon btn-view-customer"])[1]'),
        ButtonSave:() =>cy.get('#btn-edd-save'),
        ButtonCancel:() => cy.xpath('(//button[@class="btn btn-secondary"])[2]'),
        Yes1:() => cy.xpath('(//label[@class="kt-radio"])[1]'),
        Yes2:() => cy.xpath('(//label[@class="kt-radio"])[3]'),
        Yes3:() => cy.xpath('(//label[@class="kt-radio"])[5]'),
        Yes4:() => cy.xpath('(//label[@class="kt-radio"])[7]'),
        Yes5:() => cy.xpath('(//label[@class="kt-radio"])[9]'),
        Yes6:() => cy.xpath('(//label[@class="kt-radio"])[11]'),
        Yes7:() => cy.xpath('(//label[@class="kt-radio"])[13]'),
        Yes8:() => cy.xpath('(//label[@class="kt-radio"])[15]'),
        Yes9:() => cy.xpath('(//label[@class="kt-radio"])[17]'),
        Yes10:() => cy.xpath('(//label[@class="kt-radio"])[19]'),
        Yes11:() => cy.xpath('(//label[@class="kt-radio"])[21]'),
        Yes12:() => cy.xpath('(//label[@class="kt-radio"])[23]')
    }

    InputCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }
    
    InputFullName(FullName){
        this.element.FullName().type(FullName).type('{enter}')
    }
    
    InputBranchName(BranchName){
        this.element.BranchName().type(BranchName).type('{enter}')
    }

    InputBankType(){
        this.element.BankType().click()
    }

    InputSearchBankType(SearchBankType){
        this.element.SearchBankType().type(SearchBankType).type('{enter}')
    }


    InputCustomerType(CustomerType){
        this.element.CustomerType().type(CustomerType).type('{enter}')
    }

    InputCIFCreated(CIFCreated){
        this.element.CIFCreated().type(CIFCreated).type('{enter}')
    }

    InputIdentityCardNumber(IdentityCardNumber){
        this.element.IdentityCardNumber().type(IdentityCardNumber).type('{enter}')
    }


    InputOccupation(Occupation){
        this.element.Occupation().type(Occupation).type('{enter}')
    }

    InputTypeRisk(){
        this.element.TypeRisk().click()
    }

    InputSearchTypeRisk(SearchTypeRisk){
        this.element.SearchTypeRisk().type(SearchTypeRisk).type('{enter}')
    }


    ClickButtonAction(){
        this.element.ButtonAction().click()
    }

    ClickButtonSave(){
        this.element.ButtonSave().click()
    }
    
    ClickYes1(){
        this.element.Yes1().click()
    }

    ClickYes2(){
        this.element.Yes2().click()
    }

    ClickYes3(){
        this.element.Yes3().click()
    }

    ClickYes4(){
        this.element.Yes4().click()
    }

    ClickYes5(){
        this.element.Yes5().click()
    }

    ClickYes6(){
        this.element.Yes6().click()
    }

    ClickYes7(){
        this.element.Yes7().click()
    }

    ClickYes8(){
        this.element.Yes8().click()
    }

    ClickYes9(){
        this.element.Yes9().click()
    }

    ClickYes10(){
        this.element.Yes10().click()
    }


    ClickYes11(){
        this.element.Yes11().click()
    }

    ClickYes12(){
        this.element.Yes12().click()
    }

    ClickButtonCancel(){
        this.element.ButtonCancel().click()
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

    

}
export default CustomerEdd