class ExceptionSector {

    element = {

        SectorListTab :() => cy.xpath ('//button[@id="home-tab"]'),
        MakeException :() => cy.xpath('//button[@id="btn-make-exception"]'),
        RemarkColumn :() => cy.xpath('//form[@class="form_remark_exception"]/div/div/textarea'),
        SubmitRemark :() => cy.xpath ('//button[@id="btn-save-make-exception"]'),
        YesSubmit :() => cy.xpath ('//button[text()="Yes, make exception!"]'),
        OKButton :() => cy.xpath('//button[@class="swal2-confirm btn btn-success swal2-styled"]'),
        ButtonViewDetail :() => cy.xpath ('(//a[@title="Log"])[1]'),
        ButtonCloseList :() => cy.xpath ('(//button[@class="btn btn-light"])[4]'),
        BankDescList :() => cy.xpath('//thead[@id="elm_thead_cust"]/tr[2]/th[5]'),
        SectorCode :() => cy.xpath('//thead[@id="elm_thead_cust"]/tr[2]/th[6]'),
        SectorDesc :() => cy.xpath('//thead[@id="elm_thead_cust"]/tr[2]/th[7]'),
        CTRList :() => cy.xpath('(//input[@class="form-check-input chk_ctr"])[1]'),
        UTRList :() => cy.xpath('(//input[@class="form-check-input chk_str"])[1]'),
        ButtonExportList :() => cy.xpath ('//div[@id="home"]/div/div/a'),


        SectorException :() => cy.xpath('//button[@id="profile-tab"]'),
        CancelException :() => cy.xpath('//button[@id="btn-cancel-exception"]'),
        ButtonEditRemark :() => cy.xpath('(//a[@title="Edit"])[1]'),
        EditRemarkException :() => cy.xpath ('//form[@class="form_remark"]/div/div/textarea'),
        ButtonSaveRemark :() => cy.xpath('//button[@id="btn_save_remark"]'),
        ButtonLogException :() => cy.xpath('(//div[@id="myTabContent"]/div[2]/div/div[2]/div/div/table/tbody/tr/td[2]/div/a[2])[1]'),
        ButtonCloseLog :() => cy.xpath ('//div[@role="dialog"]//button[@type="button"]'),
        RemarkCancelException :() => cy.xpath ('//form[@class="form_remark_cancel_exception"]/div/div/textarea'),
        SubmitRemarkCancel :() => cy.xpath('//button[@id="btn-save-cancel-exception"]'),
        YesSubmitCancel :() => cy.xpath ('//button[text()="Yes, cancel exception!"]'),
        BankDescException :() => cy.xpath('//thead[@id="elm_thead_exception"]/tr[2]/th[5]'),
        SectorCodeException :() => cy.xpath('//thead[@id="elm_thead_exception"]/tr[2]/th[6]'),
        SectorDescException :() => cy.xpath('//thead[@id="elm_thead_exception"]/tr[2]/th[7]'),
        CTRException :() => cy.xpath('(//div[@id="myTabContent"]/div[2]/div/div[2]/div/div/table/tbody/tr/td[3]/div/input)[1]'),
        UTRException :() => cy.xpath('(//div[@id="myTabContent"]/div[2]/div/div[2]/div/div/table/tbody/tr/td[4]/div/input)[1]'),
        ButtonExportException :() => cy.xpath ('//div[@id="profile"]/div/div/a')
    }
   

    ClickMakeException(){
        this.element.MakeException().click()
    }

    ClickSectorListTab(){
        this.element.SectorListTab().click()
    }

    InputRemarkColumn(RemarkColumn){
        this.element.RemarkColumn().type(RemarkColumn)
    }

    ClickSubmitRemark(){
        this.element.SubmitRemark().click()
    }

    ClickYesSubmit(){
        this.element.YesSubmit().click()
    }

    ClickOKButton(){
        this.element.OKButton().click()
    }
    
    ClickButtonViewDetail(){
        this.element.ButtonViewDetail().click()
    }

    ClickButtonCloseLog(){
        this.element.ButtonCloseLog().click()
    }

    ClickButtonCloseList(){
        this.element.ButtonCloseList().click()
    }

    SearchingBankDescList(BankDescList){
        this.element.BankDescList().type(BankDescList).type('{enter}')
    }

    SearchingSectorCode(SectorCode){
        this.element.SectorCode().type(SectorCode).type('{enter}')
    }

    SearchingSectorDesc(SectorDesc){
        this.element.SectorDesc().type(SectorDesc).type('{enter}')
    }

    ClickCTRList(){
        this.element.CTRList().click()
    }

    ClickUTRList(){
        this.element.UTRList().click()
    }

    ClickButtonExportList(){
        this.element.ButtonExportList().
        invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/exception/sector_exception/to_csv').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/exception/sector_exception'); 
        })
    }

//      _____           _               ______                    _   _                                                           _ 
//     / ____|         | |             |  ____|                  | | (_)                 /\                                      | |
//    | (___   ___  ___| |_ ___  _ __  | |__  __  _____ ___ _ __ | |_ _  ___  _ __      /  \   _ __  _ __  _ __ _____   _____  __| |
//     \___ \ / _ \/ __| __/ _ \| '__  |  __| \ \/ / __/ _ \ '_ \| __| |/ _ \| '_ \    / /\ \ | '_ \| '_ \| '__/ _ \ \ / / _ \/ _` |
//     ____) |  __/ (__| || (_) | |    | |____ >  < (_|  __/ |_) | |_| | (_) | | | |  / ____ \| |_) | |_) | | | (_) \ V /  __/ (_| |
//    |_____/ \___|\___|\__\___/|_|    |______/_/\_\___\___| .__/ \__|_|\___/|_| |_/  _/    \_\ .__/| .__/|_|  \___/ \_/ \___|\__,_|
//                                                         | |                                | |   | |                             
//                                                         |_|                                |_|   |_|                             
       
    ClickSectorException(){
        this.element.SectorException().click()
    }

    ClickCancelException(){
        this.element.CancelException().click()
    }

    ClickButtonEditRemark(){
        this.element.ButtonEditRemark().click()
    }

    InputEditRemarkException(EditRemarkException){
        this.element.EditRemarkException().type(EditRemarkException)
    }

    ClickButtonSaveRemark(){
        this.element.ButtonSaveRemark().click()
    }

    ClickButtonLogException(){
        this.element.ButtonLogException().click()
    }

    ClickButtonCloseLog(){
        this.element.ButtonCloseLog().click()
    }

    InputRemarkCancelException(RemarkCancelException){
        this.element.RemarkCancelException().type(RemarkCancelException)
    }

    ClickSubmitRemarkCancel(){
        this.element.SubmitRemarkCancel().click()
    }

    ClickYesSubmitCancel(){
        this.element.YesSubmitCancel().click()
    }

    SearchingSectorCodeException(SectorCodeException){
        this.element.SectorCodeException().type(SectorCodeException).type('{enter}')
    }

    SearchingSectorDescException(SectorDescException){
        this.element.SectorDescException().type(SectorDescException).type('{enter}')
    }

    SearchingkBankDescException(BankDescException){
        this.element.BankDescException().type(BankDescException).type('{enter}')
    }

    ClickCTRException(){
        this.element.CTRException().click()
    }

    ClickUTRException(){
        this.element.UTRException().click()
    }

    ClickButtonExportException(){
        this.element.ButtonExportException().
        invoke('removeAttr', 'https://apuppt-v5.jiarsi.com/dev/exception/sector_exception/to_csv2').then(myLink => {
            cy.visit('https://apuppt-v5.jiarsi.com/dev/en/exception/sector_exception'); 
        })
    }

}
export default ExceptionSector
