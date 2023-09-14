class ScreeningPage {
    
    element = {
        CreatedByName :() => cy.xpath ('//input[@data-type="created-by name"]'),
        CreatedOn :() => cy.xpath('//input[@data-type="created-on"]'),
        FileName :() => cy.xpath('//input[@data-type="file-name"]'),
        UploadTypeDesc :() => cy.xpath('//input[@data-type="upload-type"]'),
        WatchlistName :() => cy.xpath('//input[@data-type="watchlist-name"]'),
        Punishment :() => cy.xpath('//input[@data-type="punishment"]'),
        ButtonViewDetail :() => cy.xpath ('(//span[text()="View Detail"])[1]'),
        CancelViewDetail :() => cy.xpath ('(//button[@class="btn btn-secondary"][normalize-space()="Cancel"])[1]'),
        ButtonScreening :() => cy.xpath ('//button[@id="btn_upload"]'),
        ButtonUploadWatchlist :() => cy.xpath ('//button[@id="btn_upload_suspect"]'),
        WatchListType :() => cy.xpath('//span[@class="select2-selection select2-selection--single form-select class_select2 watchlist_type"]'),
        DataValue :() => cy.xpath ('//input[@class="select2-search__field"]'),
        ScreeningType :() => cy.xpath ('(//span[@class="select2-selection__rendered"])[2]'),
        Delimeter :() => cy.xpath ('//span[@id="select2-delimiter-container"]'),
        UploadFile :() => cy.xpath ('//input[@id="customFile"]'),
        ButtonSubmit :() => cy.xpath ('//button[@id="btn-yes-upload"]'),
        ButtonTemplate :() => cy.xpath ('//button[@id="btn-download-template"]'),
        CancelButton :() => cy.xpath ('//div[@class="modal-footer"]//div//button[@type="button"][normalize-space()="Cancel"]'),

        // OutputRatio :() => cy.xpath('//output[@id="output_rasio_upload"]'),
        DeleteButton :() => cy.xpath ('(//button[@class="btn btn-icon btn-sm btn-danger btn-delete"])[1]'),
        ScreeningCustomerButton :() => cy.xpath ('(//button[@class="btn btn-icon btn-sm btn-primary btn-screening"])[1]'),
        ScreeningWIC :() => cy.xpath ('(//button[@class="btn btn-icon btn-sm btn-warning btn-screening mt-1"])[1]'),
        ScreeningConductor :() => cy.xpath ('(//button[@class="btn btn-icon btn-sm btn-google btn-screening mt-1"])[1]'),
        IsActive :()=> cy.xpath ('//input[@data-type="is-active"]'),
        UploadCreatedByName :() => cy.xpath ('(//input[@data-type="created-by name"])[2]'),
        UploadCreatedOn :() => cy.xpath('(//input[@data-type="created-on"])[2]'),
        UploadFileName :() => cy.xpath('(//input[@data-type="file-name"])[2]'),
        UploadType :() => cy.xpath('(//input[@data-type="upload-type"])[2]'),
        UploadStatus :() => cy.xpath ('//input[@data-type="upload-status"]'),
        ScreeningDate :() => cy.xpath ('//input[@data-type="screening-date"]'),
        ScreeningStatus :() => cy.xpath ('//input[@data-type="screening-status"]')

    }

    InputCreatedByName(CreatedByName){
        this.element.CreatedByName().type(CreatedByName).type('{enter}')
    }

    InputCreatedOn(CreatedOn){
        this.element.CreatedOn().type(CreatedOn).type('{enter}')
    }

    InputFileName(FileName){
        this.element.FileName().type(FileName).type('{enter}')
    }

    InputUploadTypeDesc(UploadTypeDesc){
        this.element.UploadTypeDesc().type(UploadTypeDesc).type('{enter}')
    }

    InputCreatedByName(CreatedByName){
        this.element.CreatedByName().type(CreatedByName).type('{enter}')
    }

    InputReferenceNumber(ReferenceNumber){
        this.element.ReferenceNumber().type(ReferenceNumber).type('{enter}')
    }

    InputWatchlistName(WatchlistName){
        this.element.WatchlistName().type(WatchlistName).type('{enter}')
    }

    InputPunishment(Punishment){
        this.element.Punishment().type(Punishment).type('{enter}')
    }

    ClickButtonViewDetail(){
        this.element.ButtonViewDetail().click()
    }

    ClickCancelViewDetail(){
        this.element.CancelViewDetail().click()
    }

    ClickButtonScreening(){
        this.element.ButtonScreening().click()
    }

    ClickButtonUploadWatchlist(){
        this.element.ButtonUploadWatchlist().click()
    }

    ClickWatchListType(){
        this.element.WatchListType().click()
    }

    InputDataValue(DataValue){
        this.element.DataValue().type(DataValue).type('{enter}')
    }

    ClickScreeningType(){
        this.element.ScreeningType().click()
    }

    ClickDelimeter(){
        this.element.Delimeter().click()
    }

    ClickUploadFile(){
        this.element.UploadFile().click()
    }

    ClickButtonSubmit(){
        this.element.ButtonSubmit().click()
    }

    ClickButtonTemplate(){
        this.element.ButtonTemplate().click()
    }

    ClickCancelButton(){
        this.element.CancelButton().click()
    }

    ClickDeleteButton(){
        this.element.DeleteButton().click()
    }

    // ClickOutputRatio(){
    //     this.element.OutputRatio().should("have.text",70)
    // }

    ClickScreeningCustomerButton(){
        this.element.ScreeningCustomerButton().click()
    }

    ClickScreeningWIC(){
        this.element.ScreeningWIC().click()
    }

    ClickScreeningConductor(){
        this.element.ScreeningConductor().click()
    }

    InputIsActive(IsActive){
        this.element.IsActive().type(IsActive).type('{enter}')
    }

    InputUploadCreatedByName(UploadCreatedByName){
        this.element.UploadCreatedByName().type(UploadCreatedByName).type('{enter}')
    }

    InputUploadCreatedOn(UploadCreatedOn){
        this.element.UploadCreatedOn().type(UploadCreatedOn).type('{enter}')
    }

    InputUploadFileName(UploadFileName){
        this.element.UploadFileName().type(UploadFileName).type('{enter}')
    }
    
    InputUploadType(UploadType){
        this.element.UploadType().type(UploadType).type('{enter}')
    }
    
    InputUploadStatus(UploadStatus){
        this.element.UploadStatus().type(UploadStatus).type('{enter}')
    }

    InputScreeningDate(ScreeningDate){
        this.element.ScreeningDate().type(ScreeningDate).type('{enter}')
    }

    InputScreeningStatus(ScreeningStatus){
        this.element.ScreeningStatus().type(ScreeningStatus).type('{enter}')
    }

}

export default ScreeningPage