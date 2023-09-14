class BranchPages {

    element = {

        AddBranchButton : () => cy.xpath ('//button[@id="btn_add"]'),
        AddCountryCode :() => cy.xpath('//input[@id="countrydesc"]'),
        ProvinceDesc :() => cy.xpath('//input[@id="provincedesc"]'),
        TownCountryDesc :() => cy.xpath ('//input[@id="towncountrydesc"]'),
        SubdistrictDesc :() => cy.xpath ('//input[@id="subdistrictdesc"]'),
        VillageDesc :() => cy.xpath ('//input[@id="villagedesc"]'),
        ZipCode :() => cy.xpath ('//input[@id="zipcode"]'),
        IsHQ :() => cy.xpath('//input[@id="Is HQ"]'),
        BranchCode :() => cy.xpath ('//input[@id="branchcode"]'),
        BranchAddres :() => cy.xpath ('//input[@id="branchaddres"]'),
        BranchDesc :() => cy.xpath ('//input[@id="branchdesc"]'),
        ButtonSave :() => cy.xpath ('//button[@id="btn_save"]'),

        OKButton : () => cy.xpath ('//button[@class="swal2-confirm btn-finish swal2-styled"]'),
        ButtonActivation :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[2]/div/input)[1]'),
        ButtonEdit :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[3]/center/button)[1]'),
        ButtonViewDetail :() => cy.xpath ('(//table[@id="DataTables_Table_0"]/tbody/tr/td[3]/center/button[2])[1]'),
        CancelEdit : () => cy.xpath ('(//button[text()="Cancel"])[2]'),
        ReportDate :() => cy.xpath('//input[@data-type="report-date"]'),
        InsertDate :() => cy.xpath('//input[@data-type="insert-date"]'),
        IsActive :() => cy.xpath('//input[@data-type="is-active"]'),
        BranchCodeParam :() => cy.xpath('//input[@data-type="branch-code"]'),
        BranchName :() => cy.xpath('//input[@data-type="branch-name"]'),
        MNEMonic :() => cy.xpath('//input[@data-type="mnemonic"]'),
        BranchAddresParam :() => cy.xpath('//input[@data-type="branch-addres"]'), 
        ButtonExportList :() => cy.xpath ('//div[@id="kt_content_container"]/div/div/a'),
   }


    ClickAddBranchButton(){
        this.element.AddBranchButton().click()
    }
    
    InputAddCountryCode(AddCountryCode) {
        this.element.AddCountryCode().type(AddCountryCode)
    }
    
    InputProvinceDesc(ProvinceDesc) {
        this.element.ProvinceDesc().type(ProvinceDesc)
    }
    
    InputTownCountryDesc(TownCountryDesc) {
        this.element.TownCountryDesc().type(TownCountryDesc)
    }
    
    InputSubdistrictDesc(SubdistrictDesc) {
        this.element.SubdistrictDesc().type(SubdistrictDesc)
    }
    
    InputVillageDesc(VillageDesc) {
        this.element.VillageDesc().type(VillageDesc)
    }
    
    InputZipCode(ZipCode) {
        this.element.ZipCode().type(ZipCode)
    }
    
    InputBranchCode(BranchCode) {
        this.element.BranchCode().type(BranchCode)
    }
    
    InputBranchAddres(BranchAddres) {
        this.element.BranchAddres().type(BranchAddres)
    }
    
    InputBranchDesc(BranchDesc) {
        this.element.BranchDesc().type(BranchDesc)
    }
    
    ClickIsHQ(){
        this.element.IsHQ().click()
    }  

    ClickButtonSave(){
        this.element.ButtonSave().click()
    }


    ClickOKButton(){
        this.element.OKButton().click()
    }

    ClickButtonActivation(){
        this.element.ButtonActivation().click()
    }

    ClickButtonEdit(){
        this.element.ButtonEdit().click()
    }

    ClickCancelEdit(){
        this.element.CancelEdit().click()
    }

    ClickButtonViewDetail(){
        this.element.ButtonViewDetail().click()
    }

    InputReportDate(ReportDate){
        this.element.ReportDate().type(ReportDate).type('{enter}')
    }

    InputInsertDate(InsertDate){
        this.element.InsertDate().type(InsertDate).type('{enter}')
    }

    InputIsActive(IsActive){
        this.element.IsActive().type(IsActive).type('{enter}')
    }

    InputBranchCodeParam(BranchCodeParam){
        this.element.BranchCodeParam().type(BranchCodeParam).type('{enter}')
    }

    InputBranchName(BranchName){
        this.element.BranchName().type(BranchName).type('{enter}')
    }

    InputMNEMonic(MNEMonic){
        this.element.MNEMonic().type(MNEMonic).type('{enter}')
    }

    InputBranchAddresParam(BranchAddresParam){
        this.element.BranchAddresParam().type(BranchAddresParam).type('{enter}')
    }

    ClickButtonExportList(){
        this.element.ButtonExportList().click()
    }

}

export default BranchPages

