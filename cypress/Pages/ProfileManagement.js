class ProfileManagement {
 
    element ={
        ButtonRBA :() => cy.xpath('(//button[@title="Risk Based Approach"])[1]'),
        ButtonViewDetail :() => cy.xpath('(//button[@title="Detail Customer"])[1]'),
        ButtonPrintReport :() => cy.xpath ('(//button[@title="Print Report"])[1]'),
        CloseDetail :() => cy.xpath('//div[@role="dialog"]//button[@type="button"][normalize-space()="Close"]'),
        CloseRBA :() => cy.xpath('//div[@class="modal fade modal_rba show"]/div/div/div[3]/button'),
        ManagementId :() => cy.xpath ('//input[@data-type="management-id"]'),
        ManagementName :() => cy.xpath ('//input[@data-type="management-name"]'),
        BankType :() => cy.xpath ('//input[@data-type="bank-type"]'),
        CustomerID :() => cy.xpath ('//input[@data-type="customer-id"]'),
        CustomerType :() => cy.xpath ('//input[@data-type="customer-type"]'),
        CustomerName :() => cy.xpath ('//input[@data-type="customer-name"]'),
        BranchCode :() => cy.xpath ('//input[@data-type="branch-code"]'),
        BranchName :() => cy.xpath ('//input[@data-type="branch-name"]'),
        JobPosition :() => cy.xpath('//input[@data-type="job-position"]'),
        ExportButton :() => cy.xpath('//div[@id="kt_app_toolbar_container"]/a')
    }

    ClickButtonRBA(){
        this.element.ButtonRBA().click()
    }

    ClickButtonViewDetail(){
        this.element.ButtonViewDetail().click()
    }

    ClickButtonPrintReport(){
        this.element.ButtonPrintReport().
        invoke('removeAttr','https://apuppt-v5.jiarsi.com/dev/profile/management/report?id=').then(mylink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/profile/management');
        })
    }

    ClickCloseDetail(){
        this.element.CloseDetail().click()
    }

    ClickCloseRBA(){
        this.element.CloseRBA().click()
    }

    SearchingBankType(BankType){
        this.element.BankType().type(BankType).type('{enter}')
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

    SearchingJobPosition(JobPosition){
        this.element.JobPosition().type(JobPosition).type('{enter}')
    }

    SearchingManagementId(ManagementId){
        this.element.ManagementId().type(ManagementId).type('{enter}')
    }
    
    SearchingManagementName(ManagementName){
        this.element.ManagementName().type(ManagementName).type('{enter}')
    }

    ClickExportButton(){
        this.element.ExportButton().
        invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/profile/mangement/to_csv').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/profile/management'); 
        })
    }
}

export default ProfileManagement