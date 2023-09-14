class SuspectedWIC {

    element = {

        AddWICButton : () => cy.xpath ('//button[@id="btn_add_suspect"]'),
        AddCustomerID :() => cy.xpath('//input[@id="wic_id"]'),
        SuspectCodeList :() => cy.xpath('//form[@id="form_add_suspect"]/div/div/div[5]/span'),
        ValueSuspectCode :() => cy.xpath ('//ul[@id="select2-suspect_code-results"]/li[3]'),
        AddSuspectNews :() => cy.xpath ('//textarea[@id="suspect_news"]'),
        AddSuspectNumber :() => cy.xpath ('//input[@id="suspect_number"]'),
        ButtonAdd :() => cy.xpath ('//button[@id="btn_add"]'),

        WICList :() => cy.xpath ('//button[@id="home-tab"]'),
        MakeSuspect :() => cy.xpath('//button[@id="btn_cust"]'),
        ButtonEditRemark :() => cy.xpath ('(//tbody[@id="elm_tbody_cust"]/tr/td[4]/center/button)[1]'),
        SuspectionRemark :() => cy.xpath('//textarea[@id="remark"]'),
        ApproveRemark : () => cy.xpath ('//button[@id="btn_remark"]'),
        SubmitRemark :() => cy.xpath ('//button[@id="btn-save-make-exception"]'),
        OKButton : () => cy.xpath ('//button[@class="swal2-confirm btn-finish swal2-styled"]'),
        CancelAddRemark : () => cy.xpath ('(//form[@id="form_remark"]/div[2]/button)[1]'),
        ViewLog :() => cy.xpath ('(//tbody[@id="elm_tbody_cust"]/tr/td[4]/center/button[2])[1]'),
        CancelViewLog :() => cy.xpath('//div[@id="remark_view_modal"]/div/div/form/div[2]/button'),
        ScreeningValue :() => cy.xpath('(//input[@data-type="screening-value"])[1]'),
        FileName :() => cy.xpath('(//input[@data-type="file-name"])[1]'),
        CreatedByName :() => cy.xpath('(//input[@data-type="created-by name"])[1]'),
        CreatedOn :() => cy.xpath('(//input[@data-type="created-on"])[1]'),
        CustomerID :() => cy.xpath('(//input[@data-type="customer-id"])[1]'),
        CustomerType :() => cy.xpath('(//input[@data-type="customer-type"])[1]'),
        CustomerName :() => cy.xpath('(//input[@data-type="customer-name"])[1]'),
        Suspect :() => cy.xpath('(//input[@data-type="suspect"])[1]'),
        Description :() => cy.xpath('(//input[@data-type="description"])[1]'),
        BirthPlace :() => cy.xpath('(//input[@data-type="birth-estabilished place"])[1]'),
        BirthDate :() => cy.xpath('(//input[@data-type="birth-estabilished date"])[1]'),
        Methode :() => cy.xpath('(//input[@data-type="method"])[1]'),
        ChecklistSuspect :() => cy.xpath('(//tbody[@id="elm_tbody_cust"]/tr/td[2]/div/input)[1]'),
        MakeSuspectRemark :() => cy.xpath('//textarea[@id="remarkmake"]'),
        ApproveSuspect :() => cy.xpath ('//button[@id="btn_make_remark"]'),
        AbortButton :() => cy.xpath('(//tbody[@id="elm_tbody_cust"]/tr/td[3]/div/input)[1]'),
        ButtonExportList :() => cy.xpath ('//form[@id="form_cust"]/div/a'),


        WICSuspect :() => cy.xpath('//button[@id="profile-tab"]'),
        CancelSuspect :() => cy.xpath('//button[@id="btn_suspect"]'),
        ButtonEditRemarkSuspect :() => cy.xpath ('(//tbody[@id="elm_thead_suspect"]/tr/td[4]/center/button)[1]'),
        ButtonCancelAddRemark : () => cy.xpath ('(//div[@id="cancel_modal"]/div/div/form/div[2]/button)[1]'),
        ViewLogSuspect :() => cy.xpath ('(//tbody[@id="elm_thead_suspect"]/tr/td[4]/center/button[2])[1]'),
        ScreeningValueSuspect :() => cy.xpath('//thead[@id="elm_thead_suspect"]/tr[2]/th[5]'),
        FileNameSuspect :() => cy.xpath('(//input[@data-type="file-name"])[2]'),
        CreatedByNameSuspect :() => cy.xpath('(//input[@data-type="created-by name"])[2]'),
        CreatedOnSuspect :() => cy.xpath('(//input[@data-type="created-on"])[2]'),
        CustomerIDSuspect :() => cy.xpath('(//input[@data-type="customer-id"])[2]'),
        CustomerTypeDescSuspect :() => cy.xpath('(//input[@data-type="customer-type"])[2]'),
        CustomerNameSuspect :() => cy.xpath('(//input[@data-type="customer-name"])[2]'),
        SuspectDescSuspect :() => cy.xpath('(//input[@data-type="suspect"])[2]'),
        BirthPlaceSuspect :() => cy.xpath('(//input[@data-type="birth-estabilished place"])[2]'),
        BirthDateSuspect :() => cy.xpath('(//input[@data-type="birth-estabilished date"])[2]'),
        MethodeSuspect :() => cy.xpath('(//input[@data-type="method"])[2]'),
        DescriptionSuspect :() => cy.xpath('(//input[@data-type="description"])[2]'),
        ButtonExportSuspect :() => cy.xpath ('//form[@id="form_suspect"]/div/a')
    }


    ClickAddWICButton(){
        this.element.AddWICButton().click()
    }
    
    InputAddCustomerID(AddCustomerID) {
        this.element.AddCustomerID().type(AddCustomerID).type('{enter}')
    }
    
    ClickSuspectCodeList(){
        this.element.SuspectCodeList().click()
    }  

    ClickValueSuspectCode() {
        this.element.ValueSuspectCode().click()
    }

    InputAddSuspectNews(AddSuspectNews) {
        this.element.AddSuspectNews().type(AddSuspectNews)
    }

    InputAddSuspectNumber(AddSuspectNumber) {
        this.element.AddSuspectNumber().type(AddSuspectNumber)
    }

    ClickButtonAdd(){
        this.element.ButtonAdd().click()
    }




    ClickWICList(){
        this.element.WICList().click()
    }

    ClickMakeSuspect(){
        this.element.MakeSuspect().click()
    }

    ClickButtonEditRemark(){
        this.element.ButtonEditRemark().click()
    }

    InputSuspectionRemark(SuspectionRemark){
        this.element.SuspectionRemark().type(SuspectionRemark)
    }

    ClickApproveRemark(){
        this.element.ApproveRemark().click()
    }

    ClickSubmitRemark(){
        this.element.SubmitRemark().click()
    }

    ClickOKButton(){
        this.element.OKButton().click()
    }

    ClickCancelAddRemark(){
        this.element.CancelAddRemark().click()
    }

    ClickViewLog(){
        this.element.ViewLog().click()
    }

    ClickCancelViewLog(){
        this.element.CancelViewLog().click()
    }

    InputScreeningValue(ScreeningValue){
        this.element.ScreeningValue().type(ScreeningValue).type('{enter}')
    }

    InputFileName(FileName){
        this.element.FileName().type(FileName).type('{enter}')
    }

    InputCreatedByName(CreatedByName){
        this.element.CreatedByName().type(CreatedByName).type('{enter}')
    }

    InputCreatedOn(CreatedOn){ 
        this.element.CreatedOn().type(CreatedOn).type('{enter}')
    }

    InputCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID).type('{enter}')
    }

    InputCustomerTypeDesc(CustomerTypeDesc){
        this.element.CustomerTypeDesc().type(CustomerTypeDesc).type('{enter}')
    }

    InputCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
    }

    InputSuspectDesc(SuspectDesc){
        this.element.SuspectDesc().type(SuspectDesc).type('{enter}')
    }

    InputDescription(Description){
        this.element.Description().type(Description).type('{enter}')
    }

    ClickChecklistSuspect(){
        this.element.ChecklistSuspect().click()
    }

    InputMakeSuspectRemark(MakeSuspectRemark){
        this.element.MakeSuspectRemark().type(MakeSuspectRemark)
    }

    ClickApproveSuspect(){
        this.element.ApproveSuspect().click()
    }

    ClickAbortButton(){
        this.element.AbortButton().click()
    }

    ClickButtonExportList(){
        this.element.ButtonExportList().click()
    }


//      _____                           _           __   _          _______ _____                                         
//     / ____|                         | |         | |  \ \        / /_   _/ ____|     /\                                   
//    | (___  _   _ ___ _ __   ___  ___| |_ ___  __| |   \ \  /\  / /  | || |         /  \   _ __  _ __  _ __ _____   _____ 
//     \___ \| | | / __| '_ \ / _ \/ __| __/ _ \/ _` |    \ \/  \/ /   | || |        / /\ \ | '_ \| '_ \| '__/ _ \ \ / / _ \
//     ____) | |_| \__ \ |_) |  __/ (__| ||  __/ (_| |     \  /\  /   _| || |____   / ____ \| |_) | |_) | | | (_) \ V /  __/
//    |_____/ \__,_|___/ .__/ \___|\___|\__\___|\__,_|      \/  \/   |_____\_____/  _/    \_\ .__/| .__/|_|  \___/ \_/ \___|
//                     | |                                                                  | |   | |                       
//                     |_|                                                                  |_|   |_|                       
   
   

    ClickWICSuspect(){
        this.element.WICSuspect().click()
    }

    ClickCancelSuspect(){
        this.element.CancelSuspect().click()
    }

    InputCancelSuspectRemark(CancelSuspectRemark){
        this.element.CancelSuspectRemark().type(CancelSuspectRemark)
    }

    ClickApproveCancelRemark(){
        this.element.ApproveCancelRemark().click()
    }

    ClickButtonEditRemarkSuspect(){
        this.element.ButtonEditRemarkSuspect().click()
    }

    ClickButtonCancelAddRemark(){
        this.element.ButtonCancelAddRemark().click()
    }

    ClickViewLogSuspect(){
        this.element.ViewLogSuspect().click()
    }

    InputScreeningValueSuspect(ScreeningValueSuspect){
        this.element.ScreeningValueSuspect().type(ScreeningValueSuspect).type('{enter}')
    }

    InputFileNameSuspect(FileNameSuspect){
        this.element.FileNameSuspect().type(FileNameSuspect).type('{enter}')
    }

    InputCreatedByNameSuspect(CreatedByNameSuspect){
        this.element.CreatedByNameSuspect().type(CreatedByNameSuspect).type('{enter}')
    }

    InputCreatedOnSuspect(CreatedOnSuspect){
        this.element.CreatedOnSuspect().type(CreatedOnSuspect).type('{enter}')
    }

    InputCustomerIDSuspect(CustomerIDSuspect){
        this.element.CustomerIDSuspect().type(CustomerIDSuspect).type('{enter}')
    }

    InputCustomerTypeDescSuspect(CustomerTypeDescSuspect){
        this.element.CustomerTypeDescSuspect().type(CustomerTypeDescSuspect).type('{enter}')
    }

    InputCustomerNameSuspect(CustomerNameSuspect){
        this.element.CustomerNameSuspect().type(CustomerNameSuspect).type('{enter}')
    }

    InputSuspectDescSuspect(SuspectDescSuspect){
        this.element.SuspectDescSuspect().type(SuspectDescSuspect).type('{enter}')
    }

    InputDescriptionSuspect(DescriptionSuspect){
        this.element.DescriptionSuspect().type(DescriptionSuspect).type('{enter}')
    }

    ClickChecklistSuspectWIC(){
        this.element.ChecklistSuspectWIC().click()
    }

    ClickButtonExportSuspectt(){
        this.element.ButtonExportSuspect().click()
    }
}
export default SuspectedWIC

