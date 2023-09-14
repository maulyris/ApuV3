class CashTransaction {

    element = {
        BankType :() => cy.xpath ('//input[@data-type="bank-type"]'),
        TransactionDate :() => cy.xpath ('//input[@data-type="transacation-date"]'),
        Branch :() => cy.xpath ('//input[@data-type="branch"]'),
        CustomerID :() => cy.xpath ('//input[@data-type="customer-id"]'),
        CustomerName :() => cy.xpath ('//input[@data-type="customer-name"]'),
        CustomerType :() => cy.xpath ('//input[@data-type="customer-type"]'),
        TransationType :() => cy.xpath ('//input[@data-type="transaction-type"]'),
        LocalAmount :() => cy.xpath ('//input[@data-type="local-amount"]'),
        TransactionFreq :() => cy.xpath ('//input[@data-type="transaction-frequency"]'),
        ButtonCTR :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[2])[1]/a'),
        ButtonDetailCTR :() => cy.xpath ('(//table[@id="DataTables_Table_1"]/tbody/tr/td[2])[1]/a'),
        BranchDesc :() => cy.xpath ('//input[@data-type="branch-desc"]'),
        TransactionNumber :() => cy.xpath ('//input[@data-type="transaction-number"]'),
        TransactionCode :() => cy.xpath ('//input[@data-type="transaction-code"]'),
        AccountNumber :() => cy.xpath ('//input[@data-type="account-number"]'),
        FullCash :() => cy.xpath ('//input[@class="form-check-input is_required FS"]'),
        PartialCash :() => cy.xpath ('//input[@class="form-check-input is_required PS"]'),
        TransactionInformation :() => cy.xpath('//textarea[@id="transactioninformation"]'),
        ButtonContinue :() => cy.xpath ('//button[text()="Continue "]'),
        RulesCode :() => cy.xpath ('//input[@id="rulescode"]'),
        SaveToAll :() => cy.xpath ('//input[@name="is_savetoall"]'),
        ButtonSubmit :() => cy.xpath ('//button[@class="btn btn-lg btn-primary btn_submit"]'),
        ButtonLogs :() => cy.xpath ('//button[@class="btn btn-warning btn-logs mr-auto"]'),
        ButtonCustomerInformation :() => cy.xpath ('//button[@class="btn btn-info btn-cust-info"]')
    }
    
    InputBankType(BankType){
        this.element.BankType().type(BankType).type('{enter}')
    }
    
    InputTransactionDate(TransactionDate){
        this.element.TransactionDate().type(TransactionDate).type('{enter}')
    }

    InputBranch(Branch){
        this.element.Branch().type(Branch).type('{enter}')
    }

    InputCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }

    InputCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
    }

    InputCustomerType(CustomerType){
        this.element.CustomerType().type(CustomerType).type('{enter}')
    }

    InputTransationType(TransationType){
        this.element.TransationType().type(TransationType).type('{enter}')
    }

    InputLocalAmount(LocalAmount){
        this.element.LocalAmount().type(LocalAmount).type('{enter}')
    }

    InputTransactionFreq(TransactionFreq){
        this.element.TransactionFreq().type(TransactionFreq).type('{enter}')
    }

    ClickButtonCTR(){
        this.element.ButtonCTR().click()
    }

    ClickButtonDetailCTR(){
        this.element.ButtonDetailCTR().click()
    }

    ClickFullCash(){
        this.element.FullCash().click()
    }

    ClickPartialCash(){
        this.element.PartialCash().click()
    }

    InputTransactionInformation(TransactionInformation){
        this.element.TransactionInformation().type(TransactionInformation)
    }

    ClickButtonContinue(){
        this.element.ButtonContinue().click()
    }

    ClickRulesCode(){
        this.element.RulesCode().click()
    }

    ClickSaveToAll(){
        this.element.SaveToAll().click()
    }

    ClickButtonSubmit(){
        this.element.ButtonSubmit().click()
    }

    ClickButtonLogs(){
        this.element.ButtonLogs().click()
    }

    ClickButtonCustomerInformation(){
        this.element.ButtonCustomerInformation().click()
    }

    InputBranchDesc(BranchDesc){
        this.element.BranchDesc().type(BranchDesc)
    }

    InputTransactionNumber(TransactionNumber){
        this.element.TransactionNumber().type(TransactionNumber)
    }

    InputTransactionCode(TransactionCode){
        this.element.TransactionCode().type(TransactionCode)
    }

    InputAccountNumber(AccountNumber){
        this.element.AccountNumber().type(AccountNumber)
    }

}

export default CashTransaction