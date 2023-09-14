class MonitoringCTR {

    element = {
        CustomerID :() => cy.xpath ('//input[@data-type="customer-id"]'),
        CustomerName :() => cy.xpath ('//input[@data-type="customer-name"]'),
        TransactionDate :() => cy.xpath ('//input[@data-type="transaction-date"]'),
        TransactionDesc :() => cy.xpath ('//input[@data-type="transaction-desc"]'),
        TransactionType :() => cy.xpath ('//input[@data-type="transaction-type"]'),
        WorkedStatus :() => cy.xpath ('//input[@data-type="worked-status"]'),
        ReportStatus :() => cy.xpath ('//input[@data-type="report-status"]'),
        BranchCode :() => cy.xpath ('//input[@data-type="branch-code"]'),
        Branch :() => cy.xpath('//input[@data-type="branch"]'),
        TransactionStatus :() => cy.xpath ('//input[@data-type="transaction-status"]'),
        ButtonDetail :() => cy.xpath('(//table[@id="DataTables_Table_0"]/tbody/tr/td[2])[1]'),
    }

    InputCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }

    InputCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
    }

    InputTransactionDate(TransactionDate){
        this.element.TransactionDate().type(TransactionDate).type('{enter}')
    }

    InputTransactionDesc(TransactionDesc){
        this.element.TransactionDesc().type(TransactionDesc).type('{enter}')
    }

    InputTransactionType(TransactionType){
        this.element.TransactionType().type(TransactionType).type('{enter}')
    }

    InputBranchCode(BranchCode){
        this.element.BranchCode().type(BranchCode).type('{enter}')
    }

    InputBranch(Branch){
        this.element.Branch().type(Branch).type('{enter}')
    }

    InputReportStatus(ReportStatus){
        this.element.ReportStatus().type(ReportStatus).type('{enter}')
    }

    InputWorkedStatus(WorkedStatus){
        this.element.WorkedStatus().type(WorkedStatus).type('{enter}')
    }

    InputTransactionStatus(TransactionStatus){
        this.element.TransactionStatus().type(TransactionStatus).type('{enter}')
    }

    ClickButtonDetail(){
        this.element.ButtonDetail().click()
    }

    
}

export default MonitoringCTR