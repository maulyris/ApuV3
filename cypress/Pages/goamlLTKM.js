class goamlLTKM {

    element = {
        BankDesc :() => cy.xpath ('//input[@data-type="bank-type"]'),
        TransactionDate :() => cy.xpath ('//input[@data-type="transaction-date"]'),
        SubmissionDate :() => cy.xpath ('//input[@data-type="submission-date"]'),
        CustomerID :() => cy.xpath ('//input[@data-type="customer-id"]'),
        CustomerName :() => cy.xpath ('//input[@data-type="customer-name"]'),
        TransactionCode :() => cy.xpath ('//input[@data-type="transaction-type code"]'),
        TransactionType :() => cy.xpath ('//input[@data-type="transaction-type"]'),
        TotalLocalAmount :() => cy.xpath ('//input[@data-type="total-local amount"]'),
        CheckAll :() => cy.xpath ('(//thead[@id="elm_thead"]/tr/th[2])[1]'),
        ChecklistOne :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[2]/div/input)[1]'),
        ButtonAction :() => cy.xpath('(//table[@id="DataTables_Table_0"]/tbody/tr/td[3]/div/button)[1]'),
        DownloadXML :() => cy.xpath ('(//a[text()=" Download XML"])[1]'),
        EditReportedXml :() => cy.xpath ('(//a[text()=" Edit Reported XML"])[1]'),
        EditXMLForm :() => cy.xpath ('(//a[text()=" Edit XML Form "])[1]'),
        PPATKReportID :() => cy.xpath ('//input[@class="form-control reportedid"]'),
        ReportedDate :() => cy.xpath ('//input[@class="form-control reportedon"]'),
        ButtonSave :() => cy.xpath ('//button[@id="btn-yes-edit-reported"]'),
        ButtonEditTransaction :() => cy.xpath ('(//a[@class="btn btn-sm btn-primary btn-icon btn-relation"])[1]'),
        ButtonContinue :() => cy.xpath ('//button[text()="Continue "]'),
        ButtonSubmit :() => cy.xpath ('//button[@class="btn btn-lg btn-primary btn_submit"]'),
        ButtonOK :() => cy.xpath ('//button[text()="OK"]'),
        ButtonClose :() => cy.xpath('//div[@role="dialog"]//button[@type="button"][normalize-space()="Close"]'),
        ButtonExport :() => cy.xpath ('//div[@id="export_view"]'),
        NotSelected :() => cy.xpath ('//button[@class="swal2-confirm btn btn-warning swal2-styled"]'),

        CustomerIDEdit :() => ('(//input[@data-type="customer-id"])[2]'),
        CustomerNameEdit :() => ('(//input[@data-type="customer-name"])[2]'),
        TransactionTypeEdit :() => ('(//input[@data-type="transaction-type code"])[2]'),
        BranchCodeEdit :() => ('(//input[@data-type="branch-code"])[1]'),
        AccountNumberEdit :() => ('(//input[@data-type="account-number"])[1]'),
        TotalLocalAmountEdit :() => ('(//input[@data-type="total-local amount"])[2]'),
        TotalRealAmount :() => ('(//input[@data-type="total-real amount"])[1]'),
        TotalSubmissionAmount :() => ('(//input[@data-type="total-submission amount"])[1]'),
        TotalFreqSub :() => ('(//input[@data-type="total-frequency submission"])[1]'),
    }

    InputBankDesc(BankDesc){
        this.element.BankDesc().type(BankDesc).type('{enter}')
    }

    InputTransactionDate(TransactionDate){
        this.element.TransactionDate().type(TransactionDate).type('{enter}')
    }

    InputSubmissionDate(SubmissionDate){
        this.element.SubmissionDate().type(SubmissionDate).type('{enter}')
    }

    InputCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }

    InputTransactionCode(TransactionCode){
        this.element.TransactionCode().type(TransactionCode).type('{enter}')
    }

    InputTransactionType(TransactionType){
        this.element.TransactionType().type(TransactionType).type('{enter}')
    }

    InputDebitCreditDesc(DebitCreditDesc){
        this.element.DebitCreditDesc().type(DebitCreditDesc).type('{enter}')
    }

    InputTotalLocalAmount(TotalLocalAmount){
        this.element.TotalLocalAmount().type(TotalLocalAmount).type('{enter}')
    }

    ClickCheckAll(){
        this.element.CheckAll().click()
    }

    ClickChecklistOne(){
        this.element.ChecklistOne().click()
    }

    ClickButtonAction(){
        this.element.ButtonAction().click()
    }

    ClickDownloadXML(){
        this.element.DownloadXML().click()
    }

    ClickEditReportedXml(){
        this.element.EditReportedXml().click()
    }

    ClickEditXMLForm(){
        this.element.EditXMLForm().click()
    }

    InputPPATKReportID(PPATKReportID){
        this.element.PPATKReportID().type(PPATKReportID)
    }

    InputReportedDate(ReportedDate){
        this.element.ReportedDate().type(ReportedDate)
    }

    ClickButtonSave(){
        this.element.ButtonSave().click()
    }

    ClickButtonEditTransaction(){
        this.element.ButtonEditTransaction().click()
    }

    ClickButtonContinue(){
        this.element.ButtonContinue().click()
    }

    ClickButtonSubmit(){
        this.element.ButtonSubmit().click()
    }

    ClickButtonOK(){
        this.element.ButtonOK().click()
    }

    ClickButtonClose(){
        this.element.ButtonClose().click()
    }

    ClickButtonExport(){
        this.element.ButtonExport().click()
    }

    ClickNotSelected(){
        this.element.NotSelected().click()
    }

    InputCustomerIDEdit(CustomerIDEdit){
        this.element.CustomerIDEdit().type(CustomerIDEdit).type('{enter}')
    }

    InputCustomerNameEdit(CustomerNameEdit){
        this.element.CustomerNameEdit().type(CustomerNameEdit).type('{enter}')
    }

    InputTransactionTypeEdit(TransactionTypeEdit){
        this.element.TransactionTypeEdit().type(TransactionTypeEdit).type('{enter}')
    }

    InputBranchCodeEdit(BranchCodeEdit){
        this.element.BranchCodeEdit().type(BranchCodeEdit).type('{enter}')
    }

    InputAccountNumberEdit(AccountNumberEdit){
        this.element.AccountNumberEdit().type(AccountNumberEdit).type('{enter}')
    }

    InputTotalLocalAmountEdit(TotalLocalAmountEdit){
        this.element.TotalLocalAmountEdit().type(TotalLocalAmountEdit).type('{enter}')
    }

    InputTotalRealAmount(TotalRealAmount){
        this.element.TotalRealAmount().type(TotalRealAmount).type('{enter}')
    }

    InputTotalSubmissionAmount(TotalSubmissionAmount){
        this.element.TotalSubmissionAmount().type(TotalSubmissionAmount).type('{enter}')
    }

    InputTotalFreqSub(){
        this.element.TotalFreqSub().type(TotalFreqSub).type('{enter}')
    }

}

export default goamlLTKM
