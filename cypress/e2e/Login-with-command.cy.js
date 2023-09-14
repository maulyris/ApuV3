import filterTest from '../../support/filterTest'

filterTest(['test-suite1', 'login'], () =>{
    describe('fitur login',()=>{
        beforeEach('user login',()=> {
            let username = "tomsmith"
            let password = "SuperSecretPassword!"
            cy.loginTheInternet(username,password)
        })

        it('login berhasil',()=>{
           
            // assertion
            cy.get('h2').should('contains.text', ' Secure')
        })

    })
})
