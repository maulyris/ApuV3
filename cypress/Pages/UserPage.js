class UserPage {
    element ={
        EmployeeNumber :() => cy.xpath('(//input[@data-type="employee-number"])[1]'),
        FullName :() => cy.xpath ('(//input[@data-type="full-name"])[1]'),
        UserName :() => cy.xpath ('(//input[@data-type="username"])[1]'),
        Role :() => cy.xpath ('(//input[@placeholder="Role"])[1]'),
        Status :() => cy.xpath ('(//input[@placeholder="Status"])[1]'),
        LockedStatus :() => cy.xpath ('(//input[@placeholder="Locked Status"])[1]'),
        ButtonAddUser :() => cy.xpath ('//button[@id="btn-add"]'),
        AddEmployeeNumber :() => cy.xpath ('(//input[@id="employee_number"])[1]'),
        AddFullName :() => cy.xpath ('(//input[@id="full_name"])[1]'),
        AddUserName :() => cy.xpath ('(//input[@id="username"])[1]'),
        AddEmail :() => cy.xpath ('//form[@id="form_add"]//input[@id="email"]'),
        AddRole :() => cy.xpath ('(//form[@id="form_add"]/div/div[3]/div/span)[1]'),
        ValueData :() => cy.xpath ('//input[@role="searchbox"]'),
        AddBranchName :() => cy.xpath ('//form[@id="form_add"]/div/div[3]/div[2]/span'),
        AddPasswordAssign :() => cy.xpath ('//form[@id="form_add"]/div/div[4]/div/span'),
        SaveAddButton :() => cy.xpath ('//button[@id="btn-yes-add"]'),
        OKButton :() => cy.xpath ('//button[@class="swal2-confirm btn-finish swal2-styled"]'),
        CancelButton :() => cy.xpath ('(//button[@type="button"][normalize-space()="Cancel"])[1]'),
        Buttonexport :() => cy.xpath ('//div[@id="kt_app_toolbar_container"]/div[2]/a'),
        ActionButton :() => cy.xpath ('(//button[@data-kt-menu-trigger="click"])[1]'),
        ViewDetalButton :() => cy.xpath ('(//a[@class="menu-link px-3 btn-view"][normalize-space()="View Detail"])[1]'),
        EditButton :() => cy.xpath ('(//a[@class="menu-link px-3 btn-edit"][normalize-space()="Edit"])[1]'),
        ResetPasswordButton :() => cy.xpath ('(//a[@class="menu-link px-3 btn-reset-password"][normalize-space()="Reset Password"])[1]'),
        InactiveButton :() => cy.xpath('(//a[@class="menu-link px-3 btn-active"][normalize-space()="Inactivate"])[1]'),
        ActiveButton :() => cy.xpath ('(//a[normalize-space()="Activate"])[1]'),
        CloseButton :() => cy.xpath ('(//button[normalize-space()="Close"])[1]'),
        EditEmployeeNumber :() => cy.xpath ('(//input[@id="employee_number"])[2]'),
        EditFullName :() => cy.xpath ('(//input[@id="full_name"])[2]'),
        EditEmail :() => cy.xpath ('(//input[@id="email"])[2]'),
        EditRole :() => cy.xpath ('//span[@id="select2-role_id-container"]'),
        EditBranchName :() => cy.xpath ('//span[@id="select2-branch_code-container"]'),
        SaveEditButton :() => cy.xpath ('//button[@id="btn-yes-edit"]'),
        OKEditButton :() => cy.xpath ('//button[@class="swal2-confirm btn btn-success btn-finish swal2-styled"]'),
        YesResetButton :() => cy.xpath ('//button[@class="swal2-confirm swal2-styled"]'),
        CancelResetButton :() => cy.xpath ('//button[@class="swal2-cancel swal2-styled"]'),
        YesInactive :() => cy.xpath ('//button[text()="Yes, inactivate it!"]'),
        CancelInactiveButton :() => cy.xpath ('//button[@class="swal2-cancel swal2-styled"]'),
        YesActivateButon :() => cy.xpath ('(//button[normalize-space()="Yes, activate it!"])[1]'),
    }

    InputEmployeeNumber(EmployeeNumber){
        this.element.EmployeeNumber().type(EmployeeNumber).type('{enter}')
    }

    InputFullName(FullName){
        this.element.FullName().type(FullName).type('{enter}')
    }

    InputUserName(UserName){
        this.element.UserName().type(UserName).type('{enter}')
    }

    InputRole(Role){
        this.element.Role().type(Role).type('{enter}')
    }

    InputStatus(Status){
        this.element.Status().type(Status).type('{enter}')
    }

    InputLockedStatus(LockedStatus){
        this.element.LockedStatus().type(LockedStatus).type('{enter}')
    }

    ClickButtonAddUser(){
        this.element.ButtonAddUser().click()
    }

    InputAddEmployeeNumber(AddEmployeeNumber){
        this.element.AddEmployeeNumber().type(AddEmployeeNumber).type('{enter}')
    }

    InputAddFullName(AddFullName){
        this.element.AddFullName().type(AddFullName).type('{enter}')
    }

    InputAddUserName(AddUserName){
        this.element.AddUserName().type(AddUserName)
    }

    InputAddEmail(AddEmail){
        this.element.AddEmail().type(AddEmail).type('{enter}')
    }

    ClickAddRole(){
        this.element.AddRole().click()
    }

    InputValueData(ValueData){
        this.element.ValueData().type(ValueData).type('{enter}')
    }

    ClickAddBranchName(){
        this.element.AddBranchName().click()
    }

    ClickAddPasswordAssign(){
        this.element.AddPasswordAssign().click()
    }

    ClickSaveAddButton(){
        this.element.SaveAddButton().click()
    }

    ClickOKButton(){
        this.element.OKButton().click()
    }

    ClickCancelButton(){
        this.element.CancelButton().click()
    }

    ClickActionButton(){
        this.element.ActionButton().click()
    }

    ClickViewDetalButton(){
        this.element.ViewDetalButton().click()
    }

    ClickEditButton(){
        this.element.EditButton().click()
    }

    ClickResetPasswordButton(){
        this.element.ResetPasswordButton().click()
    }

    ClickInactiveButton(){
        this.element.InactiveButton().click()
    }

    ClickActiveButton(){
        this.element.ActiveButton().click()
    }

    ClickCloseButton(){
        this.element.CloseButton().click()
    }

    InputEditEmployeeNumber(EditEmployeeNumber){
        this.element.EditEmployeeNumber().type(EditEmployeeNumber).type('{enter}')
    }

    InputEditFullName(EditFullName){
        this.element.EditFullName().type(EditFullName).type('{enter}')
    }

    InputEditUserName(EditUserName){
        this.element.EditUserName().type(EditUserName).type('{enter}')
    }

    InputEditEmail(EditEmail){
        this.element.EditEmail().type(EditEmail).type('{enter}')
    }

    ClickEditRole(){
        this.element.EditRole().click()
    }

    ClickEditBranchName(){
        this.element.EditBranchName().click()
    }

    ClickSaveEditButton(){
        this.element.SaveEditButton().click()
    }

    ClickOKEditButton(){
        this.element.OKEditButton().click()
    }

    ClickYesResetButton(){
        this.element.YesResetButton().click()
    }

    ClickCancelResetButton(){
        this.element.CancelResetButton().click()
    }

    ClickYesInactive(){
        this.element.YesInactive().click()
    }

    ClickCancelInactiveButton(){
        this.element.CancelInactiveButton().click()
    }

    ClickYesActivateButon(){
        this.element.YesActivateButon().click()
    }

}

export default UserPage