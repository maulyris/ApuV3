class MenuElement{
    elements = {
        GeneralInfo:() => cy.xpath('(//span[text()="  General Info  "])[1]'),
        Profile:() => cy.xpath('(//span[text()="  Profil  "])[1]'),
        ProfileCustomer:() => cy.xpath('(//span[text()="  Profil  "]/../following-sibling::div//span)[1]'),
        ProfileAccount:() => cy.xpath('//span[text()="  Profil  "]/../following-sibling::div[2]//span'),
        ProfileManagement:() => cy.xpath('(//span[text()="  Management  "])[1]'),
        ProfileConductor:() => cy.xpath('(//span[text()="  Conductor  "])[1]'),
        ProfileWalkInCustomer:() => cy.xpath('(//span[text()="  Walk In Customer  "])[1]'),
        ProfileBeneficialOwner:() => cy.xpath ('(//span[text()="  Beneficial Owner  "])[1]'),
        ProfileBlackListCustomer:() => cy.xpath ('(//span[text()="  Blacklist Customer  "])[1]'),
        ProfileWealthManagement :() => cy.xpath ('(//span[text()="  Wealth Management  "])[1]'),
        Exception:() => cy.xpath ('(//span[text()="  Exception  "])[1]'),
        CustomerException :() => cy.xpath('(//span[text()="  Exception  "]/../following-sibling::div//span)[1]'),
        AccountException :() => cy.xpath ('(//span[text()="  Exception  "]/../following-sibling::div[2]//span)[1]'),
        SectorException :() => cy.xpath('(//span[text()="  Exception  "]/../following-sibling::div[3]//span)[1]'),
        Suspected :() => cy.xpath ('(//span[text()="  Suspected  "])[1]'),
        SucpectedCustomer :() => cy.xpath ('(//span[text()="  Suspected  "]/../following-sibling::div//div/a)[1]'),
        SuspectedWalkInCustomer :() => cy.xpath ('(//span[text()="  Suspected  "]/../following-sibling::div[2]//div/a)[1]'),
        SuspectedConductor :() => cy.xpath ('(//span[text()="  Suspected  "]/../following-sibling::div[3]//div/a)[1]'),
        Branch :() => cy.xpath ('(//span[text()="  Branch  "])[1]'),
        Workflow :() => cy.xpath ('(//span[text()="  Workflow  "])[1]'),
        CashTransaction:() => cy.xpath('(//span[text()="  Workflow  "]/../following-sibling::div//span)[1]'),
        UnusualTransaction :() => cy.xpath('(//span[text()="  Workflow  "]/../following-sibling::div[2]//span)[1]'),
        BulkUnusualTransaction :() => cy.xpath('(//span[text()="  Workflow  "]/../following-sibling::div[3]//span)[1]'),
        BulkCashTransaction :() => cy.xpath('(//span[text()="  Workflow  "]/../following-sibling::div[4]//span)[1]'),
        RegulatoryReport :() => cy.xpath ('(//span[text()="  Regulatory Report  "])[1]'),
        GoamlLTKT :() => cy.xpath('(//span[text()="  Regulatory Report  "]/../following-sibling::div/div//span)[1]'),
        GoamlLTKL :() => cy.xpath('(//span[text()="  Regulatory Report  "]/../following-sibling::div[2]/div//span)[1]'),
        SIPENDAR :() => cy.xpath('(//span[text()="  Regulatory Report  "]/../following-sibling::div[3]/div//span)[1]'),
        GoamlLTKM :() => cy.xpath('(//span[text()="  Regulatory Report  "]/../following-sibling::div[4]/div//span)[1]'),
        Screening :() => cy.xpath('(//span[text()="  Screening  "])[1]'),
        Monitoring :() => cy.xpath('(//span[text()="  Monitoring  "])[1]'),
        MonitoringCTR :() => cy.xpath ('(//span[text()="  Monitoring  "]/../following-sibling::div/div//span)[1]'),
        MonitoringUTR :() => cy.xpath ('(//span[text()="  Monitoring  "]/../following-sibling::div[2]/div//span)[1]'),
        MonitoringReference :() => cy.xpath ('(//span[text()="  Monitoring  "]/../following-sibling::div[3]/div//span)[1]'),
        Report :() => cy.xpath ('(//span[text()="  Report  "])[1]'),
        ApprovalList :() => cy.xpath ('(//span[text()="  Approval List  "])[1]'),
        CustomerOnBoarding :() => cy.xpath ('(//span[text()="  Customer Onboarding  "])[1]'),
        LogActivity :() => cy.xpath('(//span[text()="  Log Activity  "])[1]'),
        UserManagement :() => cy.xpath('(//span[text()="  User Management  "])[1]'),
        User :() => cy.xpath('(//span[text()="  User Management  "]/../following-sibling::div/div//span)[1]'),
        Role :() => cy.xpath ('(//span[text()="  User Management  "]/../following-sibling::div[2]/div//span)[1]')

    }

    ClickGeneralInfo(){
        this.elements.GeneralInfo().click()
    }

    ClickProfile(){
        this.elements.Profile().click()
    }

    ClickProfileCustomer(){
        this.elements.ProfileCustomer().click()
    }

    ClickProfileManagement(){
        this.elements.ProfileManagement().click()
    }

    ClickProfileAccount(){
        this.elements.ProfileAccount().click()
    }

    ClickProfileConductor(){
        this.elements.ProfileConductor().click()
    }

    ClickProfileWalkInCustomer(){
        this.elements.ProfileWalkInCustomer().click()
    }

    ClickProfileBeneficialOwner(){
        this.elements.ProfileBeneficialOwner().click()
    }

    ClickProfileBlackListCustomer(){
        this.elements.ProfileBlackListCustomer().click()
    }

    ClickProfileWealthManagement(){
        this.elements.ProfileWealthManagement().click()
    }

    ClickException(){
        this.elements.Exception().click()
    }

    ClickCustomerException(){
        this.elements.CustomerException().click()
    }

    ClickAccountException(){
        this.elements.AccountException().click()
    }

    ClickSectorException(){
        this.elements.SectorException().click()
    }

    ClickSuspected(){
        this.elements.Suspected().click()
    }

    ClickSucpectedCustomer(){
        this.elements.SucpectedCustomer().click()
    }

    ClickSuspectedWalkInCustomer(){
        this.elements.SuspectedWalkInCustomer().click()
    }

    ClickSuspectedConductor(){
        this.elements.SuspectedConductor().click()
    }

    ClickBranch(){
        this.elements.Branch().click()
    }

    ClickWorkflow(){
        this.elements.Workflow().click()
    }

    ClickCashTransaction(){
        this.elements.CashTransaction().click()
    }

    ClickUnusualTransaction(){
        this.elements.UnusualTransaction().click()
    }

    ClickBulkUnusualTransaction(){
        this.elements.BulkUnusualTransaction().click()
    }

    ClickBulkCashTransaction(){
        this.elements.BulkCashTransaction().click()
    }

    ClickRegulatoryReport(){
        this.elements.RegulatoryReport().click()
    }

    ClickGoamlLTKT(){
        this.elements.GoamlLTKT().click()
    }

    ClickGoamlLTKL(){
        this.elements.GoamlLTKL().click()
    }

    ClickSIPENDAR(){
        this.elements.SIPENDAR().click()
    }

    ClickGoamlLTKM(){
        this.elements.GoamlLTKM().click()
    }

    ClickScreening(){
        this.elements.Screening().click()
    }

    ClickMonitoring(){
        this.elements.Monitoring().click()
    }

    ClickMonitoringCTR(){
        this.elements.MonitoringCTR().click()
    }

    ClickUnusualTransaction(){
        this.elements.UnusualTransaction().click()
    }

    ClickMonitoringUTR(){
        this.elements.MonitoringUTR().click()
    }

    ClickMonitoringReference(){
        this.elements.MonitoringReference().click()
    }

    ClickReport(){
        this.elements.Report().click()
    }

    ClickApprovalList(){
        this.elements.ApprovalList().click()
    }

    ClickCustomerOnBoarding(){
        this.elements.CustomerOnBoarding().click()
    }

    ClickLogActivity(){
        this.elements.LogActivity().click()
    }

    ClickUserManagement(){
        this.elements.UserManagement().click()
    }

    ClickUser(){
        this.elements.User().click()
    }

    ClickRole(){
        this.elements.Role().click()
    }

}

export default MenuElement
