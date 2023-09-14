class ProfileManagementWealth {
    element = {
        ButtonViewDetail :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[2])[1]'),
        CloseButtonDetail :() => cy.xpath ('(//button[@class="btn btn-light"])[1]'),
        ReportDate :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[3]'),
        InsertDate :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[4]'),
        BankDesc :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[5]'),
        OpeningDate :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[6]'),
        CustomerID :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[7]'),
        CustomerTypeDesc :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[8]'),
        CustomerName :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[9]'),
        BranchCode :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[10]'),
        BranchDesc :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[11]'),
        WealthManagementID :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[12]'),
        WealthManagementType :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[13]'),
        ExportButton :() => cy.xpath ('//div[@id="kt_app_toolbar"]/div/a'),
    }

    ClickButtonViewDetail(){
        this.element.ButtonViewDetail().click()
    }

    ClickCloseButtonDetail(){
        this.element.CloseButtonDetail().click()
    }

    SearchingReportDate(ReportDate){
        this.element.ReportDate().type(ReportDate).type('{enter}')
    }

    SearchingInsertDate(InsertDate){
        this.element.InsertDate().type(InsertDate).type('{enter}')
    }

    SearchingBankDesc(BankDesc){
        this.element.BankDesc().type(BankDesc).type('{enter}')
    }

    SearchingOpeningDate(OpeningDate){
        this.element.OpeningDate().type(OpeningDate).type('{enter}')
    }

    SearchingCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }

    SearchingCustomerTypeDesc(CustomerTypeDesc){
        this.element.CustomerTypeDesc().type(CustomerTypeDesc).type('{enter}')
    }

    SearchingCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
    }

    SearchingBranchCode(BranchCode){
        this.element.BranchCode().type(BranchCode).type('{enter}')
    }

    SearchingBranchDesc(BranchDesc){
        this.element.BranchDesc().type(BranchDesc).type('{enter}')
    }

    SearchingWealthManagementID(WealthManagementID){
        this.element.WealthManagementID().type(WealthManagementID).type('{enter}')
    }

    SearchingWealthManagementType(WealthManagementType){
        this.element.WealthManagementType().type(WealthManagementType).type('{enter}')
    }

    ClickExportButton() {
        this.element.ExportButton().
            invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/profile/bo/to_csv?branchcode').then(myLink => {
                cy.visit('https://apuppt-v5.jiarsi.com/dev/en/profile/wealth_management'); 
            })
        }
}

export default ProfileManagementWealth
