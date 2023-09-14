class ProfileBlackList {
    element = {
        ButtonViewDetail :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[2])[1]'),
        CloseButtonDetail :() => cy.xpath ('//button[@class="btn btn-light"]'),
        ReportDate :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[3]'),
        InsertDate :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[4]'),
        BankType :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[5]'),
        BankDesc :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[6]'),
        Authoriser :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[7]'),
        BlackListCID :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[8]'),
        BlackListCustomerName :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[9]'),
        BankName :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[10]'),
        ExpiredDate :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[11]'),
        DHNNumber :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[12]'),
        DateTime :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[13]'),
        DHNTypeCode :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[14]'),
        DHNTypeDesc :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[15]'),
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

    SearchingBankType(BankType){
        this.element.BankType().type(BankType).type('{enter}')
    }

    SearchingBankDesc(BankDesc){
        this.element.BankDesc().type(BankDesc).type('{enter}')
    }

    SearchingAuthoriser(Authoriser){
        this.element.Authoriser().type(Authoriser).type('{enter}')
    }

    SearchingBlackListCID(BlackListCID){
        this.element.BlackListCID().type(BlackListCID).type('{enter}')
    }

    SearchingBlackListCustomerName(BlackListCustomerName){
        this.element.BlackListCustomerName().type(BlackListCustomerName).type('{enter}')
    }

    SearchingBankName(BankName){
        this.element.BankName().type(BankName).type('{enter}')
    }

    SearchingExpiredDate(ExpiredDate){
        this.element.ExpiredDate().type(ExpiredDate).type('{enter}')
    }

    SearchingDHNNumber(DHNNumber){
        this.element.DHNNumber().type(DHNNumber).type('{enter}')
    }

    SearchingDateTime(DateTime){
        this.element.DateTime().type(DateTime).type('{enter}')
    }

    SearchingDHNTypeCode(DHNTypeCode){
        this.element.DHNTypeCode().type(DHNTypeCode).type('{enter}')
    }

    SearchingDHNTypeDesc(DHNTypeDesc){
        this.element.DHNTypeDesc().type(DHNTypeDesc).type('{enter}')
    }

    ClickExportButton() {
        this.element.ExportButton().
            invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/profile/bo/to_csv?branchcode').then(myLink => {
                cy.visit('https://apuppt-v5.jiarsi.com/dev/en/profile/blacklist_customer'); 
            })
        }
}

export default ProfileBlackList
