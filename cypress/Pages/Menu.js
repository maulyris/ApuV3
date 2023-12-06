class Menupage {
    element ={
        "Home" :() => cy.xpath ('//i[@class="la la-home"]'),
        "Customer" :()=> cy.xpath('(//*[contains(text(),"Customer") and @class="kt-menu__link-text font-weight-bold"])[1]'),
        "CustomerProfile" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Customer Profile")]'),
        "Workflow" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Workflow")]'),
        "CashTransaction" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Cash Transaction")]'),
        "UnsualTransaction" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Unusual Transaction List")]'),
        "BulkCTR" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Bulk CTR")]'),
        "BulkUTR" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Bulk UTR")]'),
        "Monitoring" :() => cy.xpath ('(//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Monitoring")])[1]'),
        "MonitoringCTR" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Cash Monitoring")]'),
        "MonitoringUTR" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Suspicious Monitoring")]'),
        "Reports" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Reports")]'),
        "ReportCTRXML" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"CTR XML")]'),
        "ReportSIPESAT" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"SIPESAT")]'),
        "ReportsCIFGanda" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"CIF Ganda")]'),
        "ReportsCTR" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"CTR Report")]'),
        "ReportsUTR" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"UTR Report")]'),
        "ReportsRBA" :() => cy.xpath ('(//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"RBA Report")])[1]'),
        "ReportsSuspect" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Suspect Report")]'),
        "ReportsException" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Exception Report")]'),
        "ReportsBranchRBA" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Branch RBA Report")]'),
        "ReportsUser" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"User Report")]'),
        "ReportsAccount" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Account Report")]'),
        "ReportsLTKL" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Branch RBA Report")]'),
        "GoAML" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"GoAML")]'),
        "GoAMLLTKL" :() => cy.xpath ('(//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"LTKL")])[1]'),
        "RegulatorInquiry" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"REGULATOR INQUIRY")]'),
        "WICConductor" :() => cy.xpath ('(//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"WIC / Conductor")])[1]'),
        "WICConductorProfile" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"WIC / Conductor Profile")]'),
        "BeneficialOwner" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Beneficial Owner")]'),
        "BeneficialOwnerProfile" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Beneficial Owner Profile")]'),
        "Parameter" :() => cy.xpath ('(//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Parameter")])[1]'),
        "GeneralParameter" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"General Parameter")]'),
        "PEPWatchList" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"PEP & Watch List")]'),
        "NegativeList" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Negative List")]'),
        "UserManagement" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"User Management")]'),
        "User" :() => cy.xpath ('(//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"User")])[1]'),
        "Role" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"Role")]'),
        "SIPENDAR" :() => cy.xpath ('(//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"SIPENDAR")])[1]'),
        "SIPENDARPROAKTIF" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"SIPENDAR PROAKTIF")]'),
        "SIPENDARINQUIRY" :() => cy.xpath ('//span[@class="kt-menu__link-text font-weight-bold" and contains(text(),"SIPENDAR INQUIRY")]'),

    }

    ClickHome(){
        this.element.Home().click()
    }

    ClickCustomer(){
        this.element.Customer().click()
    }

    ClickCustomerProfile(){
        this.element.CustomerProfile().click()
    }

    ClickWorkflow(){
        this.element.Workflow().click()
    }

    ClickCashTransaction(){
        this.element.CashTransaction().click()
    }

    ClickUnsualTransaction(){
        this.element.UnsualTransaction().click()
    }

    ClickBulkCTR(){
        this.element.BulkCTR().click()
    }

    ClickBulkUTR(){
        this.element.BulkUTR().click()
    }

    ClickMonitoring(){
        this.element.Monitoring().click()
    }

    ClickMonitoringCTR(){
        this.element.MonitoringCTR().click()
    }

    ClickMonitoringUTR(){
        this.element.MonitoringUTR().click()
    }

    ClickReports(){
        this.element.Reports().click()
    }

    ClickReportCTRXML(){
        this.element.ReportCTRXML().click()
    }

    ClickReportSIPESAT(){
        this.element.ReportSIPESAT().click()
    }

    ClickReportsCIFGanda(){
        this.element.ReportsCIFGanda().click()
    }

    ClickReportsCTR(){
        this.element.ReportsCTR().click()
    }

    ClickReportsUTR(){
        this.element.ReportsUTR().click()
    }

    ClickReportsRBA(){
        this.element.ReportsRBA().click()
    }

    ClickReportsSuspect(){
        this.element.ReportsSuspect().click()
    }

    ClickReportsException(){
        this.element.ReportsException().click()
    }

    ClickReportsBranchRBA(){
        this.element.ReportsBranchRBA().click()
    }

    ClickReportsUser(){
        this.element.ReportsUser().click()
    }

    ClickReportsAccount(){
        this.element.ReportsAccount().click()
    }

    ClickReportsLTKL(){
        this.element.ReportsLTKL().click()
    }

    ClickGoAML(){
        this.element.GoAML().click()
    }

    ClickGoAMLLTKL(){
        this.element.GoAMLLTKL().click()
    }

    ClickRegulatorInquiry(){
        this.element.RegulatorInquiry().click()
    }

    ClickWICConductor(){
        this.element.WICConductor().click()
    }

    ClickWICConductorProfile(){
        this.element.WICConductorProfile().click()
    }

    ClickBeneficialOwner(){
        this.element.BeneficialOwner().click()
    }

    ClickBeneficialOwnerProfile(){
        this.element.BeneficialOwnerProfile().click()
    }

    ClickParameter(){
        this.element.Parameter().click()
    }

    ClickGeneralParameter(){
        this.element.GeneralParameter().click()
    }

    ClickPEPWatchList(){
        this.element.PEPWatchList().click()
    }

    ClickNegativeList(){
        this.element.NegativeList().click()
    }

    ClickUserManagement(){
        this.element.UserManagement().click()
    }

    ClickUser(){
        this.element.User().click()
    }

    ClickRole(){
        this.element.Role().click()
    }

    ClickSIPENDAR(){
        this.element.SIPENDAR().click()
    }

    ClickSIPENDARPROAKTIF(){
        this.element.SIPENDARPROAKTIF().click()
    }

    ClickSIPENDARINQUIRY(){
        this.element.SIPENDARINQUIRY().click()
    }




}

export default Menupage