class LogActivityPage {

    element = {
        LogAction :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[2]/input'),
        LogEvent :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[3]/input'),
        CreatedBy :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[4]/input'),
        CreatedAt :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[5]/input'),
        LogIPAdress :() => cy.xpath ('//table[@id="DataTables_Table_0"]/thead/tr[2]/th[6]/input'),
        ExportButton :() => cy.xpath ('//div[@id="kt_app_toolbar_container"]/div[2]')
    }

    InputLogAction(LogAction){
        this.element.LogAction().type(LogAction).type('{enter}')
    }

    InputLogEvent(LogEvent){
        this.element.LogEvent().type(LogEvent).type('{enter}')
    }

    InputCreatedBy(CreatedBy){
        this.element.CreatedBy().type(CreatedBy).type('{enter}')
    }

    InputCreatedAt(CreatedAt){
        this.element.CreatedAt().type(CreatedAt).type('{enter}')
    }

    InputLogIPAdress(LogIPAdress){
        this.element.LogIPAdress().type(LogIPAdress).type('{enter}')
    }

    ClickExportButton(){
        this.element.ExportButton().click()
    }
}
export default LogActivityPage