class LogoutPage{

    element ={
        AvatarLogout:() => cy.xpath('//div[@class="kt-header__topbar-user"]'),
        ButtonLogout:() => cy.xpath('//a[@class="btn btn-label btn-label-brand btn-sm btn-bold"]')

    }

    ClickAvatarLogout() {
        this.element.AvatarLogout().click()
    }

    ClickButtonLogout(){
        this.element.ButtonLogout().click()
    }
    
}

export default LogoutPage