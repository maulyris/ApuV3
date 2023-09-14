class ProfileBO {
    element = {
        ButtonViewDetail :() => cy.xpath ('(//button[@title="Detail Beneficial Owner"])[1]'),
        RBABO :() => cy.xpath('(//button[@title="Risk Based Approach"])[1]'),
        PrintReport :() => cy.xpath ('(//button[@title="Print Report"])[1]'),
        CloseButtonRBA :() => cy.xpath ('(//button[text()="Close"])[2]'),
        CloseButtonDetail :() => cy.xpath ('(//button[text()="Close"])[1]'),
        CustomerID :() => cy.xpath ('//input[@data-type="customer-id"]'),
        CustomerType :() => cy.xpath ('//input[@data-type="customer-type"]'),
        CustomerName :() => cy.xpath ('//input[@data-type="customer-name"]'),
        BranchCode :() => cy.xpath ('//input[@data-type="branch-code"]'),
        BranchName :() => cy.xpath ('//input[@data-type="branch-name"]'),
        BOName :() => cy.xpath ('//input[@data-type="beneficial-owner name"]'),
        ExportButton :() => cy.xpath ('//div[@id="export_view"]/button'),
        ExportBranch :() => cy.xpath('(//form[@id="form_export"]/div/div/div/span)[1]'),
        ExportCustomer:() => cy.xpath('(//form[@id="form_export"]/div/div/div/span)[2]'),
        InputBranch :() => cy.xpath('//input[@class="select2-search__field"]'),
        InputCustomerType :() => cy.xpath('//input[@class="select2-search__field"]'),
        ExportCSV :() => cy.xpath ('//button[@id="btn-yes-export"]'),
        DataBranch :() => cy.xpath('//span[@class="select2-dropdown select2-dropdown--below"]/span/ul'),
        DataCustomerType :() => cy.xpath('(//span[@class="select2-dropdown select2-dropdown--below"]/span/ul)')
    }

    ClickButtonViewDetail(){
        this.element.ButtonViewDetail().click()
    }

    ClickRBABO(){
        this.element.RBABO().click()
    }

    ClickPrintReport(){
        this.element.PrintReport().
        invoke('removeAttr','https://apuppt-v5.jiarsi.com/dev/profile/bo/report?id').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/profile/bo');
        })
    }

    ClickCloseButtonDetail(){
        this.element.CloseButtonDetail().click()
    }

    ClickCloseButtonBO(){
        this.element.CloseButtonBO().click()
    }

    SearchingCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }

    SearchingCustomerType(CustomerType){
        this.element.CustomerType().type(CustomerType).type('{enter}')
    }

    SearchingCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
    }

    SearchingBranchCode(BranchCode){
        this.element.BranchCode().type(BranchCode).type('{enter}')
    }

    SearchingBranchName(BranchName){
        this.element.BranchName().type(BranchName).type('{enter}')
    }

    SearchingBOName(BoName){
        this.element.BOName().type(BoName).type('{enter}')
    }

    ClickExportButton(){
        this.element.ExportButton().click()
    }

    ClickExportBranch(){
        this.element.ExportBranch().click()
    }

    ClickExportCustomer(){
        this.element.ExportCustomer().click()
    }

    InputDataBranch(InputBranch){
        this.element.InputBranch().type(InputBranch).type('{enter}')
    }

    InputDataCustomerType(InputCustomerType){
        this.element.InputCustomerType().type(InputCustomerType).type('{enter}')
    }

    ClickExportButton(){
        this.element.ExportButton().click()
    }

    ClickExportCSV() {
        this.element.ExportCSV().
            invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/profile/bo/to_csv?branchcode=&customertypecode=').then(myLink => {
                cy.visit('https://apuppt-v5.jiarsi.com/dev/en/profile/bo'); 
            })
        }

    ClickDataBranch() {
        this.element.DataBranch().click()
    }

    ClickDataCustomerType() {
        this.element.DataCustomerType().click()
    }
}

export default ProfileBO
