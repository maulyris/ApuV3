class RolePage {
    element ={
        CloseBugButton :() => cy.get('.phpdebugbar-close-btn'),
        RoleName :() => cy.xpath ('//input[@data-type="role-name"]'),
        RoleDesc :() => cy.xpath ('//input[@data-type="role-desc"]'),
        //MenuRole :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[2]/a[1]/span)[1]'),
        MenuRole :() => cy.get('.btn_menu > .svg-icon'),
        Dashboard :() => cy.xpath ('//h2[@id="kt_accordion_1_header_1"]/button/input'),
        UserManagement :() => cy.xpath ('//h2[@id="kt_accordion_1_header_6"]/button/input'),
        LogActivity :() => cy.xpath('//h2[@id="kt_accordion_1_header_10"]/button/input'),
        Setting :() => cy.xpath ('//h2[@id="kt_accordion_1_header_17"]/button/input'),
        MenuManagement :() => cy.xpath ('//h2[@id="kt_accordion_1_header_75"]/button/input'),
        VisualizationDashboard :() => cy.xpath ('//h2[@id="kt_accordion_1_header_179"]/button/input'),
        ApplicationSetup :() => cy.xpath ('//h2[@id="kt_accordion_1_header_182"]/button/input'),
        Generalnfo :() => cy.xpath ('//h2[@id="kt_accordion_1_header_193"]/button/input'),
        Workflow :() => cy.xpath ('//h2[@id="kt_accordion_1_header_210"]/button/input'),
        Monitoring :() => cy.xpath ('//h2[@id="kt_accordion_1_header_216"]/button/input'),
        Screening :() => cy.xpath ('//h2[@id="kt_accordion_1_header_229"]/button/input'),
        RegulatoryReport :() => cy.xpath('//h2[@id="kt_accordion_1_header_230"]/button/input'),
        Report :() => cy.xpath ('//h2[@id="kt_accordion_1_header_234"]/button/input'),
        CustomerOnBoarding :() => cy.xpath ('//h2[@id="kt_accordion_1_header_243"]/button/input'),
        Upload :() => cy.xpath ('//h2[@id="kt_accordion_1_header_247"]/button/input'),
        SaveMenuRole :() => cy.xpath ('//button[@id="btn-yes-menu"]'),
        CancelRole :() => cy.xpath ('(//button[@type="button"][normalize-space()="Cancel"])[2]'),
        EditRole :() => cy.get('.btn_edit'),
        EditRoleName :() => cy.xpath('(//input[@id="role_name"])[2]'),
        EditRoleDesc :() => cy.xpath('(//input[@id="role_desc"])[2]'),
        EditRoleLevel :() => cy.xpath ('(//input[@name="role_level"])[3]'),
        EditRoleType :() => cy.xpath('(//span[@role="combobox"])[1]'),
        SaveEditButton :() => cy.xpath ('//button[@id="btn-yes-edit"]'),
        AddRoleButton :() => cy.xpath ('//button[@id="btn-add"]'),
        AddRoleName :() => cy.xpath ('(//input[@id="role_name"])[1]'),
        AddRoleDesc :() => cy.xpath ('(//input[@id="role_desc"])[1]'),
        AddRoleLevel :() => cy.xpath ('(//input[@id="role_level"])[2]'),
        AddRoleType :() => cy.xpath ('(//span[@class="select2-selection select2-selection--single form-control class_select2"])[1]'),
        ValueData :() => cy.xpath ('(//input[@role="searchbox"])[1]'),
        SaveAddRole :() => cy.xpath ('//button[@id="btn-yes-add"]'),
        CancelAddRole :() => cy.xpath ('(//button[@type="button"][normalize-space()="Cancel"])[1]'),
        OKButton :() => cy.xpath ('(//button[normalize-space()="OK"])[1]'),
        ExportButton :() => cy.xpath ('(//a[normalize-space()="Export"])[1]')
    }

    InputRoleName(RoleName){
        this.element.RoleName().type(RoleName).type('{enter}')
    }

    InputRoleDesc(RoleDesc){
        this.element.RoleDesc().type(RoleDesc).type('{enter}')
    }

    ClickMenuRole(){
        this.element.MenuRole().click()
    }

    ClickDashboard(){
        this.element.Dashboard().click()
    }

    ClickUserManagement(){
        this.element.UserManagement().click()
    }

    ClickLogActivity(){
        this.element.LogActivity().click()
    }

    ClickSetting(){
        this.element.Setting().click()
    }

    ClickMenuManagement(){
        this.element.MenuManagement().click()
    }

    ClickVisualizationDashboard(){
        this.element.VisualizationDashboard().click()
    }

    ClickApplicationSetup(){
        this.element.ApplicationSetup().click()
    }

    ClickGeneralnfo(){
        this.element.Generalnfo().click()
    }

    ClickWorkflow(){
        this.element.Workflow().click()
    }

    ClickMonitoring(){
        this.element.Monitoring().click()
    }

    ClickScreening(){
        this.element.Screening().click()
    }

    ClickRegulatoryReport(){
        this.element.RegulatoryReport().click()
    }

    ClickReport(){
        this.element.Report().click()
    }

    ClickCustomerOnBoarding(){
        this.element.CustomerOnBoarding().click()
    }

    ClickUpload(){
        this.element.Upload().click()
    }

    ClickSaveMenuRole(){
        this.element.SaveMenuRole().click()
    }

    ClickCancelRole(){
        this.element.CancelRole().click()
    }

    ClickEditRole(){
        this.element.EditRole().click()
    }

    InputEditRoleName(EditRoleName){
        this.element.EditRoleName().type(EditRoleName)
    }

    InputEditRoleDesc(EditRoleDesc){
        this.element.EditRoleDesc().type(EditRoleDesc)
    }

    InputEditRoleLevel(EditRoleLevel){
        this.element.EditRoleLevel().type(EditRoleLevel)
    }

    ClickEditRoleType(){
        this.element.EditRoleType().click()
    }

    ClickSaveEditButton(){
        this.element.SaveEditButton().click()
    }

    ClickAddRoleButton(){
        this.element.AddRoleButton().click()
    }

    InputAddRoleName(AddRoleName){
        this.element.AddRoleName().type(AddRoleName)
    }

    InputAddRoleDesc(AddRoleDesc){
        this.element.AddRoleDesc().type(AddRoleDesc)
    }

    InputAddRoleLevel(AddRoleLevel){
        this.element.AddRoleLevel().type(AddRoleLevel)
    }

    ClickAddRoleType(){
        this.element.AddRoleType().click()
    }

    InputValueData(ValueData){
        this.element.ValueData().type(ValueData).type('{enter}')
    }

    ClickSaveAddRole(){
        this.element.SaveAddRole().click()
    }

    ClickAddRoleType(){
        this.element.AddRoleType().click()
    }

    ClickCancelAddRole(){
        this.element.CancelAddRole().click()
    }

    ClickOKButton(){
        this.element.OKButton().click()
    }

    ClickExportButton(){
        this.element.ExportButton().click()
    }

    ClickCloseBugButton(){
        this.element.CloseBugButton().click()
    }
}

export default RolePage