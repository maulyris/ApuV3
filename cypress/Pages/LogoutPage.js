class LogoutPage{

    element ={
        AvatarLogout:() => cy.xpath('(//div[@id="kt_header_user_menu_toggle"]/div)[1]'),
        ButtonLogout:() => cy.xpath('//div[@id="kt_header_user_menu_toggle"]/div[2]/div[6]')

    }

    ClickAvatarLogout() {
        this.element.AvatarLogout().click()
    }

    ClickButtonLogout(){
        this.element.ButtonLogout().click()
    }
    
}

export default LogoutPage