class CustomerProfile {
    element = {

        Id :() => cy.xpath ("//input[@id='search-customer-id']"),
        FullName :() => cy.xpath ("//input[@id='search-full-name']"),
        BranchName :() => cy.xpath ("//select[@id='search-branch-name']"),
        BankType:()=> cy.xpath("//select[@id='search_bank_desc']"),
        CustomerTypeDesc :() => cy.xpath ("//select[@id='search_customer_type_desc']"),
        CIFCreated :() => cy.xpath ("//input[@id='search-cif-created-on']"),
        Status :() => cy.xpath ("//select[@id='search_customer_status_desc']"),
        IdentityNumber :() => cy.xpath ("//input[@id='search-identity-card-number']"),
        Occupation :() => cy.xpath ("//input[@id='search-occupation-business-desc']"),
        TypeRisk :() => cy.xpath ("//select[@id='search_rba_final_risk_type_desc']"),


        //RBAButton :() => cy.xpath('(//bu2tton[@title="Risk Based Approach"])[1]'),
        DetailCustomer :() => cy.xpath ("//button[@class='btn btn-primary btn-icon btn-view-customer']"),
        // CloseDetail :() => cy.xpath ('(//button[@type="button"][normalize-space()="Close"])[1]'),
        // EDDButton :() => cy.xpath('(//button[@title="EDD"])[1]'),
        // PrintReport :() => cy.xpath ('(//button[@title="Print Report"])[1]'),
        // OpeningDate :() => cy.xpath ('//input[@data-type="opening-date"]'),
        
        
        
        // BrachCode :() => cy.xpath('//input[@data-type="branch-code"]'),
        // RBACode :() => cy.xpath ('//input[@data-type="rba-code"]'),
        // RBADesc :() => cy.xpath ('//input[@data-type="rba"]'),
        // Address :() => cy.xpath ('//input[@data-type="address"]'),
        // CloseRBA:() => cy.xpath('//div[@role="dialog"]//button[@type="button"][normalize-space()="Close"]'),
        // CloseButton :() => cy.xpath ('(//button[@type="button"][normalize-space()="Close"])[1]'),
        // IncomeRBA :() => cy.xpath('//a[@href="#tab_income"]'),
        // ProductRBA :() => cy.xpath('//a[@href="#tab_product"]'),
        // CustomerSuspectRBA :() => cy.xpath('//a[@href="#tab_suspect"]'),
        // IdentityRBA :() => cy.xpath('//a[@href="#tab_identity"]'),
        // OccupationRBA :() => cy.xpath('//a[@href="#tab_occupation"]'),
        // TownCountryRBA :() => cy.xpath('//a[@href="#tab_towncountry"]'),
        // LOBRBA :() => cy.xpath('//a[@href="#tab_lineofbusiness"]'),
        // SDBRBA :() => cy.xpath('//a[@href="#tab_safedepositbox"]'),
        // SourceOfIncomeRBA :() => cy.xpath('//a[@href="#tab_sourceofincome"]'),
        // DeliveryChannelRBA :() => cy.xpath('//a[@href="#tab_deliverychannel"]'),
        // RBAFinal :() => cy.xpath('//a[@href="#tab_rba_final"]'),
        // ExportButton :() => cy.xpath ('//div[@id="export_view"]'),
        // BranchExport :() => cy.xpath('//span[@id="select2-branchcode-container"]'),
        // CustomerTypeExport :() => cy.xpath('//span[@id="select2-customertypecode-container"]'),
        // RiskTypeExport :() => cy.xpath ('//span[@id="select2-risktype-container"]'),
        // BankTypeExport :() => cy.xpath ('//span[@id="select2-banktypecode-container"]'),
        // ValueData :() => cy.xpath ('(//input[@role="searchbox"])[1]'),
        // SaveExport :() => cy.xpath('//button[@id="btn-yes-export"]'),
        // CancelExport :() => cy.xpath ('(//button[normalize-space()="Cancel"])[1]'),

    }


    ClickDetailCustomer(){
        this.element.DetailCustomer().click()
    }

    // ClickRBAButton(){
    //     this.element.RBAButton().click()
    // }

    // ClickEDDButton(){
    //     this.element.EDDButton().click()
    // }

    // ClickPrintReport(){
    //     this.element.PrintReport().
    //     invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/customer/customer_profile/report?id=110373386&groupsetup=f_customerinforba').then(myLink => {
    //         cy.visit('https://apuppt-v5.jiarsi.com/dev/en/customer/customer_profile')
    //     })
    // }

    InputId(Id){
        this.element.Id().type(Id).type('{enter}')
    }

    InputFullName(FullName){
        this.element.FullName().type(FullName).type('{enter}')
    }

    InputBranchName(BranchName){
        this.element.BranchName().type(BranchName).type('{enter}')
    }

    InputBankType(BankType){
        this.element.BankType().type(BankType).type('{enter}')
    }

    InputCustomerTypeDesc(CustomerTypeDesc){
        this.element.CustomerTypeDesc().type(CustomerTypeDesc).type('{enter}')
    }

    InputCIFCreated(CIFCreated){
        this.element.CIFCreated().type(CIFCreated).type('{enter}')
    }

    InputStatus(Status){
        this.element.Status().type(Status).type('{enter}')
    }

    InputIdentityNumber(IdentityNumber){
        this.element.IdentityNumber().type(IdentityNumber).type('{enter}')
    }

    InputOccupation(Occupation){
        this.element.Occupation().type(Occupation).type('{enter}')
    }

    InputTypeRisk(TypeRisk){
        this.element.TypeRisk().type(TypeRisk).type('{enter}')
    }

    // InputBrachCode(BrachCode){
    //     this.element.BrachCode().type(BrachCode).type('{enter}')
    // }

    // InputRBACode(RBACode){
    //     this.element.RBACode().type(RBACode).type('{enter}')
    // }

    // InputRBADesc(RBADesc){
    //     this.element.RBADesc().type(RBADesc).type('{enter}')
    // }

    // InputAddress(Address){
    //     this.element.Address().type(Address).type('{enter}')
    // }

    // ClickCloseRBA(){
    //     this.element.CloseRBA().click()
    // }

    // ClickCloseButton(){
    //     this.element.CloseButton().click()
    // }

    // ClickIncomeRBA(){
    //     this.element.IncomeRBA().click()
    // }

    // ClickProductRBA(){
    //     this.element.ProductRBA().click()
    // }

    // ClickCustomerSuspectRBA(){
    //     this.element.CustomerSuspectRBA().click()
    // }

    // ClickIdentityRBA(){
    //     this.element.IdentityRBA().click()
    // }

    // ClickOccupationRBA(){
    //     this.element.OccupationRBA().click()
    // }

    // ClickTownCountryRBA(){
    //     this.element.TownCountryRBA().click()
    // }

    // ClickLOBRBA(){
    //     this.element.LOBRBA().click()
    // }

    // ClickSDBRBA(){
    //     this.element.SDBRBA().click()
    // }

    // ClickSourceOfIncomeRBA(){
    //     this.element.SourceOfIncomeRBA().click()
    // }

    // ClickDeliveryChannelRBAn(){
    //     this.element.DeliveryChannelRBA().click()
    // }

    // ClickRBAFinal(){
    //     this.element.RBAFinal().click()
    // }

    // ClickExportButton(){
    //     this.element.ExportButton().click()
    // }

    // ClickBranchExport(){
    //     this.element.BranchExport().click()
    // }

    // ClickCustomerTypeExport(){
    //     this.element.CustomerTypeExport().click()
    // }

    // ClickRiskTypeExport(){
    //     this.element.RiskTypeExport().click()
    // }

    // ClickBankTypeExport(){
    //     this.element.BankTypeExport().click()
    // }

    // InputValueData(ValueData){
    //     this.element.ValueData().type(ValueData).type('{enter}')
    // }

    ClickDetailCustomer(){
          this.element.DetailCustomer().invoke('removeAttr','target').click()
          cy.url({ timeout: 10000 }).should('include','https://apuppt.jiarsi.com/dev-3.1/id/customer_profile_form') 
      }

    // ClickDetailCustomer(){
    //     this.element.DetailCustomer().invoke('removeAttr','https://apuppt.jiarsi.com/dev-3.1/id/customer_profile').then(myLink=> {cy.visit('https://apuppt.jiarsi.com/dev-3.1/id/customer_profile_form')})
    //     }

    ClickCancelExport(){
        this.element.CancelExport().click()
    }

}
export default CustomerProfile