class ApprovalList {
    element = {
        ReportDate :() => cy.xpath('//input[@data-type="report-date"]'),
        InsertDate :() => cy.xpath('//input[@data-type="insert-date"]'),
        FormGroup :() => cy.xpath('//input[@data-type="form-group"]'),
        CreatedBy :() => cy.xpath('//input[@data-type="created-by name"]'),
        CreatedOn :() => cy.xpath('//input[@data-type="created-on"]'),
        EditButton :() => cy.xpath ('(//a[@title="Edit"])[1]'),
        ViewButton :() => cy.xpath ('(//a[@title="Detail"])[1]'),
        ApproveButton :() => cy.xpath ('//button[@id="btn_approve"]'),
        RejectButton :() => cy.xpath ('//button[@id="btn_reject"]'),
        SearchButton :() => cy.xpath ('////div[@class="header-search"]/input'),
        OKButton :() => cy.xpath ('(//button[normalize-space()="OK"])[1]'),
        CloseButton :() => cy.xpath ('//button[@class="btn btn-light"]'),
        ExportButton :() => cy.xpath('(//a[normalize-space()="Export"])[1]')
    }

    InputReportDate(ReportDate){
        this.element.ReportDate().type(ReportDate).type('{enter}')
    }

    InputInsertDate(InsertDate){
        this.element.InsertDate().type(InsertDate).type('{enter}')
    }

    InputFormGroup(FormGroup){
        this.element.FormGroup().type(FormGroup).type('{enter}')
    }

    InputCreatedBy(CreatedBy){
        this.element.CreatedBy().type(CreatedBy).type('{enter}')
    }

    InputCreatedOn(CratedOn){
        this.element.CratedOn().type(CratedOn).type('{enter}')
    }

    ClickEditButton(){
        this.element.EditButton().click()
    }

    ClickViewButton(){
        this.element.ViewButton().click()
    }

    ClickApproveButton(){
        this.element.ApproveButton().click()
    }

    ClickRejectButton(){
        this.element.RejectButton().click()
    }

    InputSearchButton(SearchButton){
        this.element.SearchButton().type(SearchButton).type('{enter}')
    }

    ClickOKButton(){
        this.element.OKButton().click()
    }

    ClickCloseButton(){
        this.element.CloseButton().click()
    }
    
    ClickExportButton(){
        this.element.ExportButton().click()
    }

}

export default ApprovalList