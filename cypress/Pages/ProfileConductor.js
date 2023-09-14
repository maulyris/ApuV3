class ProfileConductor {
    element = {
        ButtonViewDetail :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[2])[1]'),
        CloseButton :() => cy.xpath ('//button[text()="Close"]'),
        ReportDate :() => cy.xpath ('//input[@data-type="report-date"]'),
        InsertDate :() => cy.xpath ('//input[@data-type="insert-date"]'),
        ConductorTypeCode :() => cy.xpath ('//input[@data-type="conductor-type code"]'),
        ConductorTypeDesc :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[6]'),
        ConductorID :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[7]'),
        ConductorName :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[8]'),
        BranchCode :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[9]'),
        BranchDesc :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[10]'),
        BankDesc :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[11]'),
        ExportButton :() => cy.xpath ('//div[@id="kt_app_toolbar"]/div/a')
    }

    ClickButtonViewDetail(){
        this.element.ButtonViewDetail().click()
    }

    ClickCloseButton(){
        this.element.CloseButton().click()
    }

    SearchingReportDate(ReportDate){
        this.element.ReportDate().type(ReportDate)
    }

    SearchingInsertDate(InsertDate){
        this.element.InsertDate().type(InsertDate)
    }

    SearchingConductorTypeCode(ConductorTypeCode){
        this.element.ConductorTypeCode().type(ConductorTypeCode)
    }

    SearchingConductorTypeDesc(ConductorTypeDesc){
        this.element.ConductorTypeDesc().type(ConductorTypeDesc)
    }

    SearchingConductorID(ConductorID){
        this.element.ConductorID().type(ConductorID)
    }

    SearchingConductorName(ConductorName){
        this.element.ConductorName().type(ConductorName)
    }

    SearchingBranchCode(BranchCode){
        this.element.BranchCode().type(BranchCode)
    }

    SearchingBranchDesc(BranchDesc){
        this.element.BranchDesc().type(BranchDesc)
    }

    SearchingBankDesc(BankDesc){
        this.element.BankDesc().click(BankDesc)
    }

    ClickExportButton(){
        this.element.ExportButton().click()
    }

}

export default ProfileConductor
