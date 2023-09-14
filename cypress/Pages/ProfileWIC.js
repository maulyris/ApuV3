class ProfileWIC {
    element = {
        ButtonViewDetail :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[2])[1]'),
        CloseButton :() => cy.xpath ('//button[text()="Close"]'),
        WICID :() => cy.xpath ('//input[@data-type="walkin-customer id"]'),
        WICName :() => cy.xpath ('//input[@data-type="walk-in customer name"]'),
        BranchDesc :() => cy.xpath ('//input[@data-type="branch-name"]'),
        GenderDesc :() => cy.xpath ('//input[@data-type="gender"]'),
        NationalityCode :() => cy.xpath ('//input[@data-type="nationality-code"]'),
        IdentityTypeCode :() => cy.xpath ('//input[@data-type="identity-type code"]'),
        IdentityNumber :() => cy.xpath ('//input[@data-type="identity-number"]'),
        OccupationDesc :() => cy.xpath ('//input[@data-type="occupation"]'),
        LineofBusinessDesc :() => cy.xpath ('//input[@data-type="line-of business"]'),
        SourceofFundCode :() => cy.xpath ('//input[@data-type="source-of fund code"]'),
        IncomeCode :() => cy.xpath ('//input[@data-type="income-code"]'),
        IncomeDesc :() => cy.xpath ('//input[@data-type="income"]'),
        Address :() => cy.xpath ('//input[@data-type="address"]'),
        ExportButton :() => cy.xpath ('//div[@id="export_view"]/button'),
        ExportBranch :() => cy.xpath('//span[@class="select2-selection select2-selection--single form-select class_select2"]'),
        InputBranch :() => cy.xpath('//input[@type="search"]'),
        ExportCSV :() => cy.xpath ('//button[@id="btn-yes-export"]'),
        DataBranch :() => cy.xpath('//span[@class="select2-dropdown select2-dropdown--below"]/span/ul')
    }

    ClickButtonViewDetail(){
        this.element.ButtonViewDetail().click()
    }

    ClickCloseButton(){
        this.element.CloseButton().click()
    }

    SearchingWICID(WICID){
        this.element.WICID().type(WICID)
    }

    SearchingWICName(WICName){
        this.element.WICName().type(WICName)
    }

    SearchingBranchDesc(BranchDesc){
        this.element.BranchDesc().type(BranchDesc)
    }

    SearchingGenderDesc(GenderDesc){
        this.element.GenderDesc().type(GenderDesc)
    }

    SearchingNationalityCode(NationalityCode){
        this.element.NationalityCode().type(NationalityCode)
    }

    SearchingIdentityTypeCode(IdentityTypeCode){
        this.element.IdentityTypeCode().type(IdentityTypeCode)
    }

    SearchingIdentityNumber(IdentityNumber){
        this.element.IdentityNumber().type(IdentityNumber)
    }

    SearchingOccupationDesc(OccupationDesc){
        this.element.OccupationDesc().type(OccupationDesc)
    }

    SearchingLineofBusinessDesc(LineofBusinessDesc){
        this.element.LineofBusinessDesc().type(LineofBusinessDesc)
    }

    SearchingSourceofFundCode(SourceofFundCode){
        this.element.SourceofFundCode().type(SourceofFundCode)
    }

    SearchingIncomeCode(IncomeCode){
        this.element.IncomeCode().type(IncomeCode)
    }

    SearchingIncomeDesc(IncomeDesc){
        this.element.IncomeDesc().type(IncomeDesc)
    }

    SearchingAddress(Address){
        this.element.Address().type(Address)
    }

    ClickExportButton(){
        this.element.ExportButton().click()
    }

    ClickExportBranch () {
        this.element.ExportBranch().click()
    }

    ClickInputBranch(InputBranch) {
        this.element.InputBranch().type(InputBranch).type('{enter}')
    }

    ClickExportCSV() {
        this.element.ExportCSV().
            invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/profile/wic/to_csv?branchcode').then(myLink => {
                cy.visit('https://apuppt-v5.jiarsi.com/dev/en/profile/wic'); 
            })
        }

    ClickDataBranch() {
        this.element.DataBranch().click()
    }

}

export default ProfileWIC
