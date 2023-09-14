class LoginPage{
    elements = {
        usernameField:() => cy.get('#floatingInput'),
        passwordField:() => cy.get('#password'),
        SignInButton :() => cy.xpath('//button[@id="kt_login_signin_submit"]')
    }

    Inputusername(username){
        this.elements.usernameField().type(username)
    }

    Inputpassword(password){
        this.elements.passwordField().type(password)
    }

    ClickButtonSignIn(){
        this.elements.SignInButton().click()
    }
}

export default LoginPage
