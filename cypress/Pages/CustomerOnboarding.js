class CustomerOnboardingPage {
    element = {
        OnboardingListTab :() => cy.xpath('//button[@id="home-tab"]'),
        SearchingCustomerName :() => cy.xpath ('//input[@id="customername"]'),
        RatioOnBoardingList :() => cy.xpath ('//input[@id="rasio"]'),
        ButtonSubmit :() => cy.xpath ('//button[@id="btn-submit"]'),
        ViewDetail :() => cy.xpath ('(//button[@title="Detail"])[1]'),
        PrintDetail :() => cy.xpath ('//button[@class="btn btn-primary btn_print"]'),
        CancelButton :() => cy.xpath('//form[@id="forms"]/div[2]/button[2]'),
        CreatedByName :() => cy.xpath ('//thead[@id="tableAccount"]/tr[2]/th[3]'),
        CreatedByBranch :() => cy.xpath ('//thead[@id="tableAccount"]/tr[2]/th[4]'),
        CreatedOn :() => cy.xpath ('//thead[@id="tableAccount"]/tr[2]/th[5]'),
        ProcessStatus :() => cy.xpath ('//thead[@id="tableAccount"]/tr[2]/th[6]'),
        ResultStatus :() => cy.xpath ('//thead[@id="tableAccount"]/tr[2]/th[7]'),
        CustomerName :() => cy.xpath ('//thead[@id="tableAccount"]/tr[2]/th[8]'),


        HistoryTab :() => cy.xpath('//button[@id="profile-tab"]'),
        CreatedByNameHistory :() => cy.xpath ('//thead[@id="tableHistory"]/tr[2]/th[3]'),
        CreatedByBranchHistory :() => cy.xpath ('//thead[@id="tableHistory"]/tr[2]/th[4]'),
        CreatedOnHistory :() => cy.xpath ('//thead[@id="tableHistory"]/tr[2]/th[5]'),
        ProcessStatusHistory :() => cy.xpath ('//thead[@id="tableHistory"]/tr[2]/th[6]'),
        ResultStatusHistory :() => cy.xpath ('//thead[@id="tableHistory"]/tr[2]/th[7]'),
        CustomerNameHistory :() => cy.xpath ('//thead[@id="tableHistory"]/tr[2]/th[8]'),
    }

    ClickOnboardingListTab(){
        this.element.OnboardingListTab().click()
    }

    InputSearchingCustomerName(SearchingCustomerName){
        this.element.SearchingCustomerName().type(SearchingCustomerName)
    }

    ClickRatioOnBoardingList(){
        this.element.RatioOnBoardingList().click()
    }

    ClickButtonSubmit(){
        this.element.ButtonSubmit().click()
    }

    ClickViewDetail(){
        this.element.ViewDetail().click()
    }

    ClickPrintDetail(){
        this.element.PrintDetail().click()
    }

    ClickCancelButton(){
        this.element.CancelButton().click()
    }

    InputCreatedByName(CreatedByName){
        this.element.CreatedByName().type(CreatedByName).type('{enter}')
    }

    InputCreatedByBranch(CreatedByBranch){
        this.element.CreatedByBranch().type(CreatedByBranch).type('{enter}')
    }

    InputCreatedOn(CreatedOn){
        this.element.CreatedOn().type(CreatedOn).type('{enter}')
    }

    InputProcessStatus(ProcessStatus){
        this.element.ProcessStatus().type(ProcessStatus).type('{enter}')
    }

    InputResultStatus(ResultStatus){
        this.element.ResultStatus().type(ResultStatus).type('{enter}')
    }

    InputCustomerName(CustomerName){
        this.element.CustomerName().type(CustomerName).type('{enter}')
    }


    ClickHistoryTab(){
        this.element.HistoryTab().click()
    }

    InputCreatedByNameHistory(CreatedByNameHistory){
        this.element.CreatedByNameHistory().type(CreatedByNameHistory).type('{enter}')
    }

    InputCreatedByBranchHistory(CreatedByBranchHistory){
        this.element.CreatedByBranchHistory().type(CreatedByBranchHistory).type('{enter}')
    }

    InputCustomerNameHistory(CustomerNameHistory){
        this.element.CustomerNameHistory().type(CustomerNameHistory).type('{enter}')
    }
    
    InputCreatedOnHistory(CreatedOnHistory){
        this.element.CreatedOnHistory().type(CreatedOnHistory).type('{enter}')
    }

    InputProcessStatusHistory(ProcessStatusHistory){
        this.element.ProcessStatusHistory().type(ProcessStatusHistory).type('{enter}')
    }

    InputResultStatusHistory(ResultStatusHistory){
        this.element.ResultStatusHistory().type(ResultStatusHistory).type('{enter}')
    }

    InputCustomerNameHistory(CustomerNameHistory){
        this.element.CustomerNameHistory().type(CustomerNameHistory).type('{enter}')
    }
}

export default CustomerOnboardingPage