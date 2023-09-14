class MonitoringReference {

    element = {
        TransactionID :() => cy.xpath ('//input[@data-type="transaction-id"]'),
        ReferenceNumber :() => cy.xpath ('//input[@data-type="reference-number"]'),
        TransactionDate :() => cy.xpath ('//input[@data-type="transaction-date"]'),
        AccountNumber :() => cy.xpath ('//input[@data-type="account-number"]'),
        CustomerID :() => cy.xpath ('//input[@data-type="customer-id"]'),
        TransactionType :() => cy.xpath ('//input[@data-type="transaction-type"]'),
        LocalAmount :() => cy.xpath ('//input[@data-type="localamount"]'),
    }

    InputTransactionID(TransactionID){
        this.element.TransactionID().type(TransactionID).type('{enter}')
    }

    InputReferenceNumber(ReferenceNumber){
        this.element.ReferenceNumber().type(ReferenceNumber).type('{enter}')
    }

    InputTransactionDate(TransactionDate){
        this.element.TransactionDate().type(TransactionDate).type('{enter}')
    }

    InputAccountNumber(AccountNumber){
        this.element.AccountNumber().type(AccountNumber).type('{enter}')
    }

    InputCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }

    InputTransactionType(TransactionType){
        this.element.TransactionType().type(TransactionType).type('{enter}')
    }

    InputLocalAmount(LocalAmount){
        this.element.LocalAmount().type(LocalAmount).type('{enter}')
    }
   
}

export default MonitoringReference