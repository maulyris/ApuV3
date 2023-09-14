class CustomerProfile {
    element = {

        RBAButton :() => cy.xpath('(//button[@title="Risk Based Approach"])[1]'),
        DetailCustomer :() => cy.xpath ('(//button[@title="Detail Customer"])[1]'),
        CloseDetail :() => cy.xpath ('(//button[@type="button"][normalize-space()="Close"])[1]'),
        EDDButton :() => cy.xpath('(//button[@title="EDD"])[1]'),
        PrintReport :() => cy.xpath ('(//button[@title="Print Report"])[1]'),
        OpeningDate :() => cy.xpath ('//input[@data-type="opening-date"]'),
        CustomerID :() => cy.xpath ('//input[@data-type="customer-id"]'),
        CustomerTypeDesc :() => cy.xpath ('//input[@data-type="customer-type"]'),
        CustomerName :() => cy.xpath ('//input[@data-type="customer-name"]'),
        BrachCode :() => cy.xpath('//input[@data-type="branch-code"]'),
        BranchName :() => cy.xpath ('//input[@data-type="branch-name"]'),
        RBACode :() => cy.xpath ('//input[@data-type="rba-code"]'),
        RBADesc :() => cy.xpath ('//input[@data-type="rba"]'),
        BankType:()=> cy.xpath('//input[@data-type="bank-type"]'),
        IdentityNumber :() => cy.xpath ('//input[@data-type="identity-number"]'),
        Address :() => cy.xpath ('//input[@data-type="address"]'),
        CloseRBA:() => cy.xpath('//div[@role="dialog"]//button[@type="button"][normalize-space()="Close"]'),
        CloseButton :() => cy.xpath ('(//button[@type="button"][normalize-space()="Close"])[1]'),
        IncomeRBA :() => cy.xpath('//a[@href="#tab_income"]'),
        ProductRBA :() => cy.xpath('//a[@href="#tab_product"]'),
        CustomerSuspectRBA :() => cy.xpath('//a[@href="#tab_suspect"]'),
        IdentityRBA :() => cy.xpath('//a[@href="#tab_identity"]'),
        OccupationRBA :() => cy.xpath('//a[@href="#tab_occupation"]'),
        TownCountryRBA :() => cy.xpath('//a[@href="#tab_towncountry"]'),
        LOBRBA :() => cy.xpath('//a[@href="#tab_lineofbusiness"]'),
        SDBRBA :() => cy.xpath('//a[@href="#tab_safedepositbox"]'),
        SourceOfIncomeRBA :() => cy.xpath('//a[@href="#tab_sourceofincome"]'),
        DeliveryChannelRBA :() => cy.xpath('//a[@href="#tab_deliverychannel"]'),
        RBAFinal :() => cy.xpath('//a[@href="#tab_rba_final"]'),
        ExportButton :() => cy.xpath ('//div[@id="export_view"]'),
        BranchExport :() => cy.xpath('//span[@id="select2-branchcode-container"]'),
        CustomerTypeExport :() => cy.xpath('//span[@id="select2-customertypecode-container"]'),
        RiskTypeExport :() => cy.xpath ('//span[@id="select2-risktype-container"]'),
        BankTypeExport :() => cy.xpath ('//span[@id="select2-banktypecode-container"]'),
        ValueData :() => cy.xpath ('(//input[@role="searchbox"])[1]'),
        SaveExport :() => cy.xpath('//button[@id="btn-yes-export"]'),
        CancelExport :() => cy.xpath ('(//button[normalize-space()="Cancel"])[1]'),

    }

    ClickRBAButton(){
        this.element.RBAButton().click()
    }

    ClickDetailCustomer(){
        this.element.DetailCustomer().click()
    }

    ClickEDDButton(){
        this.element.EDDButton().click()
    }

    ClickPrintReport(){
        this.element.PrintReport().
        invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/customer/customer_profile/report?id=110373386&groupsetup=f_customerinforba').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/customer/customer_profile')
        })
    }

    InputOpeningDate(OpeningDate){
        this.element.OpeningDate().type(OpeningDate).type('{enter}')
    }

    InputCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }

    InputCustomerTypeDesc(CustomerTypeDesc){
        this.element.CustomerTypeDesc().type(CustomerTypeDesc).type('{enter}')
    }

    InputCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
    }

    InputBrachCode(BrachCode){
        this.element.BrachCode().type(BrachCode).type('{enter}')
    }

    InputBranchName(BranchName){
        this.element.BranchName().type(BranchName).type('{enter}')
    }

    InputRBACode(RBACode){
        this.element.RBACode().type(RBACode).type('{enter}')
    }

    InputRBADesc(RBADesc){
        this.element.RBADesc().type(RBADesc).type('{enter}')
    }

    InputIdentityNumber(IdentityNumber){
        this.element.IdentityNumber().type(IdentityNumber).type('{enter}')
    }

    InputBankType(BankType){
        this.element.BankType().type(BankType).type('{enter}')
    }

    InputAddress(Address){
        this.element.Address().type(Address).type('{enter}')
    }

    ClickCloseRBA(){
        this.element.CloseRBA().click()
    }

    ClickCloseButton(){
        this.element.CloseButton().click()
    }

    ClickIncomeRBA(){
        this.element.IncomeRBA().click()
    }

    ClickProductRBA(){
        this.element.ProductRBA().click()
    }

    ClickCustomerSuspectRBA(){
        this.element.CustomerSuspectRBA().click()
    }

    ClickIdentityRBA(){
        this.element.IdentityRBA().click()
    }

    ClickOccupationRBA(){
        this.element.OccupationRBA().click()
    }

    ClickTownCountryRBA(){
        this.element.TownCountryRBA().click()
    }

    ClickLOBRBA(){
        this.element.LOBRBA().click()
    }

    ClickSDBRBA(){
        this.element.SDBRBA().click()
    }

    ClickSourceOfIncomeRBA(){
        this.element.SourceOfIncomeRBA().click()
    }

    ClickDeliveryChannelRBAn(){
        this.element.DeliveryChannelRBA().click()
    }

    ClickRBAFinal(){
        this.element.RBAFinal().click()
    }

    ClickExportButton(){
        this.element.ExportButton().click()
    }

    ClickBranchExport(){
        this.element.BranchExport().click()
    }

    ClickCustomerTypeExport(){
        this.element.CustomerTypeExport().click()
    }

    ClickRiskTypeExport(){
        this.element.RiskTypeExport().click()
    }

    ClickBankTypeExport(){
        this.element.BankTypeExport().click()
    }

    InputValueData(ValueData){
        this.element.ValueData().type(ValueData).type('{enter}')
    }

    ClickSaveExport(){
        this.element.SaveExport().
        invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/customer/customer_profile/to_csv?groupsetup').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/customer/customer_profile')
        })
    }

    ClickCancelExport(){
        this.element.CancelExport().click()
    }

}
export default CustomerProfile