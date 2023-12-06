class SuspectedCustomer {

    element = {

        CustomerSuspectList :() => cy.xpath ('(//li[@class="nav-item bg-success-light"])[1]'),
        ApprovedCustomerSuspect :() => cy.xpath ('(//li[@class="nav-item bg-success-light"])[2]'),
        RemarkSuspectList :() => cy.xpath ("//a[@class='nav-link font-weight-bold active']"),

        MakeSuspect :() => cy.xpath("//button[@id='btn-make-suspect']"),
        CancelSuspect :() => cy.xpath('//button[@id="btn-cancel-suspect"]'),
        ButtonYesCancelSuspect :() => cy.xpath('//button[@class="swal2-confirm swal2-styled"]'),

        ButtonEditRemark :() => cy.xpath ("(//button[@class='btn btn-primary btn-icon btn-remark-suspect'])[1]"),
        IsSuspectYes :() => cy.xpath('(//label[@class="kt-radio kt-radio--success"])'),
        IsSuspectNo :() => cy.xpath('(//label[@class="kt-radio kt-radio--danger"])'),
        SuspectionRemark :() => cy.xpath('(//input[@id="note"])[1]'),
        ApproveRemark : () => cy.xpath ('//button[@id="btn-yes-add"]'),
        CancelRemark : () => cy.xpath ('(//button[@class="btn btn-secondary"])[3]'),
        OKButton : () => cy.xpath ('//button[@class="swal2-confirm btn-finish swal2-styled"]'),


        ChecklistBox : () => cy.xpath ('(//input[@type="checkbox"])'),

        ViewLog :() => cy.xpath ("(//button[@class='btn btn-danger btn-icon btn-view-timeline'])[1]"),
        CancelViewLog :() => cy.xpath("(//button[@class='btn btn-secondary'])[4]"),
        
        //SearchingCustomerSuspectList
        CustomerID :() => cy.xpath('(//input[@id="search-customer-id"])[1]'),
        CustomerName :() => cy.xpath('(//input[@id="search-customer-name"])[1]'),
        BankType :() => cy.xpath('(//input[@id="search-bank-desc"])[1]'),
        SuspectType :() => cy.xpath('//span[@id="select2-search_suspect_desc-container"]'),
        SearchSuspectType :() => cy.xpath('input[@class="select2-search__field"]'),
        News :() => cy.xpath('(//input[@id="search-news1"])[1]'),

        //SearchingApprovedCustomerSuspectList
        CustomerIDApproved :() => cy.xpath('(//input[@id="search-customer-id"])[2]'),
        CustomerNameApproved :() => cy.xpath('(//input[@id="search-customer-name"])[2]'),
        BankTypeApproved :() => cy.xpath('(//input[@id="search-bank-desc"])[2]'),
        SuspectTypeApproved :() => cy.xpath('//span[@id="select2-search_suspect_desc2-container"]'),
        SearchSuspectTypeApproved :() => cy.xpath('//input[@class="select2-search__field"]'),
        NewsApproved :() => cy.xpath('(//input[@id="search-news1"])[2]'),

        //SearchingRemarkCustomerSuspectList
        CustomerIDRemark :() => cy.xpath('(//input[@id="search-customer-id"])[3]'),
        CustomerNameRemark :() => cy.xpath('(//input[@id="search-customer-name"])[3]'),
        BankTypeRemark :() => cy.xpath('(//input[@id="search-bank-desc"])[3]'),
        SuspectTypeRemark :() => cy.xpath('//span[@id="select2-search_suspect_desc3-container"]'),
        SearchSuspectTypeRemark :() => cy.xpath('//input[@class="select3-search__field"]'),
        NewsRemark :() => cy.xpath('(//input[@id="search-news1"])[3]'),
    }


    ClickChecklistBox(){
        this.element.ChecklistBox().check({ force: true })
    }

    ClickCustomerSuspectList(){
        this.element.CustomerSuspectList().click()
    }

    ClickApprovedCustomerSuspect(){
        this.element.ApprovedCustomerSuspect().click()
    }

    ClickButtonYesCancelSuspect(){
        this.element.ButtonYesCancelSuspect().click()
    }

    ClickRemarkSuspectList(){
        this.element.RemarkSuspectList().click()
    }

    ClickMakeSuspect(){
        this.element.MakeSuspect().click()
    }

    ClickCancelSuspect(){
        this.element.CancelSuspect().click()
    }

    ClickCancelSuspect(){
        this.element.CancelSuspect().click()
    }



    ClickIsSuspectYes(){
        this.element.IsSuspectYes().click()
    }

    ClickIsSuspectNo(){
        this.element.IsSuspectNo().click()
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

    ClickCancelRemark(){
        this.element.CancelRemark().click()
    }

    ClickSubmitRemark(){
        this.element.SubmitRemark().click()
    }

    ClickOKButton(){
        this.element.OKButton().click()
    }

    ClickViewLog(){
        this.element.ViewLog().click()
    }

    ClickCancelViewLog(){
        this.element.CancelViewLog().click()
    }

    //Input1
    InputCustomerID(CustomerID){
        this.element.CustomerID().type(CustomerID, { force: true }).type('{enter}')
    }

    DeleteCustomerID(){
        this.element.CustomerID().clear()
    }

    InputCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
    }

    InputBankType(BankType){
        this.element.BankType().type(BankType).type('{enter}')
    }

    InputSuspectType(SuspectType){ 
        this.element.SuspectType().type(SuspectType).type('{enter}')
    }

    InputSearchSuspectType(SearchSuspectType){
        this.element.SearchSuspectType().type(SearchSuspectType).type('{enter}')
    }

    InputNews(News){
        this.element.News().type(News).type('{enter}')
    }

    //Input2
    InputCustomerIDApproved(CustomerID){
        this.element.CustomerIDApproved().type(CustomerID).type('{enter}')
    }

    InputCustomerNameApproved(CustomerName){
        this.element.CustomerNameApproved().type(CustomerName).type('{enter}')
    }

    InputBankTypeApproved(BankType){
        this.element.BankTypeApproved().type(BankType).type('{enter}')
    }

    InputSuspectTypeApproved(SuspectType){ 
        this.element.SuspectTypeApproved().type(SuspectType).type('{enter}')
    }

    InputSearchSuspectTypeApproved(SearchSuspectType){
        this.element.SearchSuspectTypeApproved().type(SearchSuspectType).type('{enter}')
    }

    InputNewsApproved(News){
        this.element.NewsApproved().type(News).type('{enter}')
    }

    //Input3
    InputCustomerIDRemark(CustomerID){
        this.element.CustomerIDRemark().type(CustomerID).type('{enter}')
    }

    InputCustomerNameRemark(CustomerName){
        this.element.CustomerNameRemark().type(CustomerName).type('{enter}')
    }

    InputBankTypeRemark(BankType){
        this.element.BankTypeRemark().type(BankType).type('{enter}')
    }

    InputSuspectTypeRemark(SuspectType){ 
        this.element.SuspectTypeRemark().type(SuspectType).type('{enter}')
    }

    InputSearchSuspectTypeRemark(SearchSuspectType){
        this.element.SearchSuspectTypeRemark().type(SearchSuspectType).type('{enter}')
    }

    InputNewsRemark(News){
        this.element.NewsRemark().type(News).type('{enter}')
    }


//      _____                           _           _    _____          _                                                                         _ 
//     / ____|                         | |         | |  / ____|        | |                              /\                                       | |
//    | (___  _   _ ___ _ __   ___  ___| |_ ___  __| | | |    _   _ ___| |_ ___  _ __ ___   ___ _ __   /  \    _ __  _ __  _ __ _____   _____  __| |
//     \___ \| | | / __| '_ \ / _ \/ __| __/ _ \/ _` | | |   | | | / __| __/ _ \| '_ ` _ \ / _ \ '__| / /\ \  | '_ \| '_ \| '__/ _ \ \ / / _ \/ _` |
//     ____) | |_| \__ \ |_) |  __/ (__| ||  __/ (_| | | |___| |_| \__ \ || (_) | | | | | |  __/ |   / ____\ \| |_) | |_) | | | (_) \ V /  __/ (_| |
//    |_____/ \__,_|___/ .__/ \___|\___|\__\___|\__,_|  \_____\__,_|___/\__\___/|_| |_| |_|\___|_|  /_/    \_\  .__/| .__/|_|  \___/ \_/ \___|\__,_|
//                     | |                                                                                    | |   | |                             
//                     |_|                                                                                    |_|   |_|                               


}
export default SuspectedCustomer

