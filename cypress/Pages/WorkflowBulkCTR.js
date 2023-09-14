class BulkCashTransaction {

    element = {
        BankType :() => cy.xpath ('//input[@data-type="bank-type"]'),
        TransactionDate :() => cy.xpath ('//input[@data-type="transacation-date"]'),
        CustomerID :() => cy.xpath ('//input[@data-type="customer-id"]'),
        CustomerName :() => cy.xpath ('//input[@data-type="customer-name"]'),
        TransationType :() => cy.xpath ('//input[@data-type="transaction-type"]'),
        TransactionFreq :() => cy.xpath ('//input[@data-type="transaction-frequency"]'),
        ChecklistAll :() => cy.xpath('//input[@class="form-check-input check_all"]'),
        ApproveButton :() => cy.xpath ('//button[@class="btn btn-success btn-approve-bulk"]'),
        RejectButton :() => cy.xpath ('//button[@class="btn btn-danger btn-reject-bulk"]'),
        TransactionDetail :() => cy.xpath ('//h2[@id="kt_accordion_1_header_1"]'),
        TransactionInformation :() => cy.xpath ('//textarea[@id="transactioninformation"]'),
        Reported :()=> cy.xpath ('//input[@name="rd_action"][@value="R"]'),
        NotReported :() => cy.xpath ('//input[@name="rd_action"][@value="NR"]'),
        YesButton :() => cy.xpath ('//button[@id="btn-yes-bulk"]'),
        NoButton :() => cy.xpath ('(//button[@class="btn btn-danger"])[1]')
    }
    
    InputBankType(BankType){
        this.element.BankType().type(BankType).type('{enter}')
    }
    
    InputTransactionDate(TransactionDate){
        this.element.TransactionDate().type(TransactionDate).type('{enter}')
    }

    InputCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }

    InputCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
    }

    InputTransationType(TransationType){
        this.element.TransationType().type(TransationType).type('{enter}')
    }

    InputTransactionFreq(TransactionFreq){
        this.element.TransactionFreq().type(TransactionFreq).type('{enter}')
    }

    ClickChecklistAll(){
        this.element.ChecklistAll().click()
    }

    ClickApproveButton(){
        this.element.ApproveButton().click()
    }

    ClickRejectButton(){
        this.element.RejectButton().click()
    }

    ClickTransactionDetail(){
        this.element.TransactionDetail().click()
    }

    InputTransactionInformation(TransactionInformation){
        this.element.TransactionInformation().type(TransactionInformation).type('{enter}')
    }

    ClickReported(){
        this.element.Reported().click()
    }

    ClickNotReported(){
        this.element.NotReported().click()
    }

    ClickYesButton(){
        this.element.YesButton().click()
    }

    ClickNoButton(){
        this.element.NoButton().click()
    }

}

export default BulkCashTransaction