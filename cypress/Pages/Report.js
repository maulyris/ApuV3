
class ReportPage {

    element = {
        SelectReport :() => cy.xpath ('//span[@id="select2-search_report-container"]'),
        UserRole :() => cy.xpath('(//div[@id="div_filter"]/div/span)[1]'),
        UserBankType :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[2]'),
        UserBranchName :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[3]'),
        AccountOpeningDate :() => cy.xpath ('//input[@id="kt_daterangepicker_5"]'),
        ButtonApply :() => cy.xpath ('//div[@class="daterangepicker ltr show-calendar opensright"]/div[4]/button[2]'),
        BranchBranchDesc :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[1]'),
        CustomerSuspectBranch :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[1]'),
        CustomerSuspectTypeDesc :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[2]'),
        CustomerSuspectStatus :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[3]'),
        SipesatQuarter :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[1]'),
        SipesatYear :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[2]'),
        CustomerDuplicateYear :() => cy.xpath('(//div[@id="div_filter"]/div/span)[1]'),
        CustomerDuplicateMonth :() => cy.xpath('(//div[@id="div_filter"]/div/span)[2]'),
        CustomerDuplicateBranchDesc :() => cy.xpath('(//div[@id="div_filter"]/div/span)[3]'),
        CustomerDuplicateType :() => cy.xpath('(//div[@id="div_filter"]/div/span)[4]'),
        CTRTransactionDate :() => cy.xpath ('//input[@id="kt_daterangepicker_5"]'),
        CTRCustomerType :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[1]'),
        CTRBranchDesc :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[2]'),
        CTRButtonApply :() => cy.xpath ('(//button[text()="Apply"])[2]'),
        RBABankType :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[1]'),
        RBABranchName :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[2]'),
        RBACustomerType :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[3]'),
        RBARisktype :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[4]'),
        UTRTransactionDate :() => cy.xpath ('//input[@id="kt_daterangepicker_5"]'),
        UTRButtonApply :() => cy.xpath('(//div[@class="daterangepicker ltr show-calendar opensright"]/div[4]/button[2])[3]'),
        UTRCustomerType :() => cy.xpath('(//div[@id="div_filter"]/div/span)[1]'),
        UTRBrancDesc :() => cy.xpath ('(//div[@id="div_filter"]/div/span)[2]'),
        DataValue :() => cy.xpath('//input[@class="select2-search__field"]'),
        ExportButton :() => cy.xpath ('//button[@id="btn_export"]'),
    }

    ClickSelectReport(){
        this.element.SelectReport().click()
    }

    ClickUserRole(){
        this.element.UserRole().click()
    }

    ClickUserBankType(){
        this.element.UserBankType().click()
    }

    ClickUserBranchName(){
        this.element.UserBranchName().click()
    }

    InputAccountOpeningDate(AccountOpeningDate){
        this.element.AccountOpeningDate().type(AccountOpeningDate)
    }

    ClickBranchBranchDesc(){
        this.element.BranchBranchDesc().click()
    }

    ClickCustomerSuspectBranch(){
        this.element.CustomerSuspectBranch().click()
    }

    ClickCustomerSuspectTypeDesc(){
        this.element.CustomerSuspectTypeDesc().click()
    }

    ClickCustomerSuspectStatus(){
        this.element.CustomerSuspectStatus().click()
    }

    ClickSipesatQuarter(){
        this.element.SipesatQuarter().click()
    }

    ClickSipesatYear(){
        this.element.SipesatYear().click()
    }

    ClickSelectReport(){
        this.element.SelectReport().click()
    }

    ClickCustomerDuplicateYear(){
        this.element.CustomerDuplicateYear().click()
    }

    ClickCustomerDuplicateMonth(){
        this.element.CustomerDuplicateMonth().click()
    }

    ClickCustomerDuplicateBranchDesc(){
        this.element.CustomerDuplicateBranchDesc().click()
    }

    ClickCustomerDuplicateType(){
        this.element.CustomerDuplicateType().click()
    }

    InputCTRTransactionDate(CTRTransactionDate){
        this.element.CTRTransactionDate().type(CTRTransactionDate)
    }

    ClickCTRCustomerType(){
        this.element.CTRCustomerType().click()
    }

    ClickCTRBranchDesc(){
        this.element.CTRBranchDesc().click()
    }

    ClickCTRButtonApply(){
        this.element.CTRButtonApply().click()
    }

    ClickRBABankType(){
        this.element.RBABankType().click()
    }

    ClickRBABranchName(){
        this.element.RBABranchName().click()
    }

    ClickRBACustomerType(){
        this.element.RBACustomerType().click()
    }

    ClickRBARisktype(){
        this.element.RBARisktype().click()
    }

    InputUTRTransactionDate(UTRTransactionDate){
        this.element.UTRTransactionDate().type(UTRTransactionDate)
    }

    ClickUTRButtonApply(){
        this.element.UTRButtonApply().click()
    }

    ClickUTRCustomerType(){
        this.element.UTRCustomerType().click()
    }

    ClickUTRBrancDesc(){
        this.element.UTRBrancDesc().click()
    }

    InputDataValue(DataValue){
        this.element.DataValue().type(DataValue).type('{enter}')
    }

    ClickButtonApply(){
        this.element.ButtonApply().click()
    }

    ClickExportButton(){
        this.element.ExportButton().click()
    }

}

export default ReportPage