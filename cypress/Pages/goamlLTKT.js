class goamlLTKT {

    element = {
        TransactionDate :() => cy.xpath ('//thead[@id="elm_thead"]/tr[2]/th[4]/input'),
        SubmissionDate :() => cy.xpath ('//thead[@id="elm_thead"]/tr[2]/th[5]/input'),
        CustomerID :() => cy.xpath ('//thead[@id="elm_thead"]/tr[2]/th[6]/input'),
        CustomerName :() => cy.xpath ('//thead[@id="elm_thead"]/tr[2]/th[7]/input'),
        DebitCreditDesc :() => cy.xpath ('//thead[@id="elm_thead"]/tr[2]/th[8]/input'),
        TotalLocalAmount :() => cy.xpath ('//thead[@id="elm_thead"]/tr[2]/th[9]/input'),
        CheckAll :() => cy.xpath ('(//thead[@id="elm_thead"]/tr/th[2])[1]'),
        ChecklistOne :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[2]/div/input)[1]'),
        ButtonAction :() => cy.xpath('(//table[@id="DataTables_Table_0"]/tbody/tr/td[3]/div/button)[1]'),
        DownloadXML :() => cy.xpath ('(//a[text()=" Download XML"])[1]'),
        EditReportedXml :() => cy.xpath ('(//a[text()=" Edit Reported XML"])[1]'),
        EditXMLForm :() => cy.xpath ('(//a[text()=" Edit XML Form "])[1]'),
        PPATKReportID :() => cy.xpath ('//input[@class="form-control reportedid"]'),
        ReportedDate :() => cy.xpath ('//input[@class="form-control reportedon"]'),
        ButtonSave :() => cy.xpath ('//button[@id="btn-yes-edit-reported"]'),
        ButtonDetailTransaction :() => cy.xpath ('(//a[@class="btn btn-sm btn-primary btn-icon btn-relation"])[1]'),
        ButtonContinue :() => cy.xpath ('//button[text()="Continue "]'),
        ButtonSubmit :() => cy.xpath ('//button[@class="btn btn-lg btn-primary btn_submit"]'),
        ButtonOK :() => cy.xpath ('//button[text()="OK"]'),
        ButtonClose :() => cy.xpath('//div[@role="dialog"]//button[@type="button"][normalize-space()="Close"]'),
        ButtonExport :() => cy.xpath ('//div[@id="export_view"]'),
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

    InputCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
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

    ClickButtonDetailTransaction(){
        this.element.ButtonDetailTransaction().click()
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

}

export default goamlLTKT
