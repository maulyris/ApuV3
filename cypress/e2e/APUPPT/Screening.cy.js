import LoginPage from "../../Pages/loginPage"
import LogoutPage from "../../Pages/LogoutPage"
import MenuElement from "../../Pages/Menu"
import ScreeningPage from "../../Pages/ScreeningPage"

let Login = new LoginPage
let Logout = new LogoutPage
let Menu = new MenuElement
let Screening = new ScreeningPage


describe ('Menu Screening', () => {
    let APUPPT;
    before('Link Visit', () => {
        cy.fixture("Screening.json").then((data)=>
        {
            APUPPT=data;
        })
        cy.visit ('https://apuppt-v5.jiarsi.com/dev/')
        Login.Inputusername('superuser2')
        Login.Inputpassword('Jiarsi1@')
        Login.ClickButtonSignIn()
        cy.wait(4000)
    })

    it('Screening Customer and Upload Watchlist', () => {
        cy.get('.breadcrumb > :nth-child(1) > .text-black').should('be.visible','content.text','Visualization Dashboard')
        Menu.ClickScreening()
        Screening.ClickButtonScreening()
        cy.wait(4000)
        Screening.ClickButtonUploadWatchlist()
        cy.wait(4000)
        Screening.ClickWatchListType()
        Screening.InputDataValue(APUPPT.WatchlistType)
        cy.wait(4000)
        Screening.ClickScreeningType()
        Screening.InputDataValue(APUPPT.ScreeningType)
        Screening.ClickDelimeter()
        Screening.InputDataValue(APUPPT.Delimeter)
        // const valueSetter = Object.getOwnPropertyDescriptor(
        //     window.HTMLInputElement.prototype,
        //     'value',
        //   ).set

        // cy.get('.screening_type_view > :nth-child(3) > .form-range').should('have.value', 70)
        // .then(function ($slider) {
        //   valueSetter.call($slider[0], 70)
        // })
        // .trigger('change')
        cy.get('.screening_type_view > :nth-child(2) > .form-range').invoke("val",70).trigger('change')
        cy.wait(4000)
        cy.xpath('//output[@id="output_rasio_upload"]').should("have.text",70)
        Screening.ClickUploadFile()

        Screening.InputCreatedByName(APUPPT.CreatedByName)
        Screening.InputCreatedOn(APUPPT.CreatedOn)
        Screening.InputFileName(APUPPT.FileName)
        Screening.InputUploadTypeDesc(APUPPT.UploadTypeDesc)
        Screening.InputWatchlistName(APUPPT.WatchlistName)
        Screening.InputPunishment(APUPPT.Punishment)
        cy.get('.sorting_asc').scrollIntoView()
        cy.wait(4000)
        Screening.ClickButtonViewDetail()
        cy.wait(4000)
        Screening.InputIsActive(APUPPT.IsActive)
        Screening.InputUploadCreatedByName(APUPPT.InputUploadCreatedByName)
        Screening.InputUploadCreatedOn(APUPPT.InputUploadCreatedOn)
        Screening.InputUploadFileName(APUPPT.InputUploadFileName)
        Screening.InputUploadType(APUPPT.InputUploadType)
        Screening.InputUploadStatus(APUPPT.UploadStatus)
        Screening.InputScreeningDate(APUPPT.InputScreeningDate)
        Screening.InputScreeningStatus(APUPPT.InputScreeningStatus)
        cy.wait(4000)
        Screening.ClickButtonUploadWatchlist()
        cy.wait(4000)
        Screening.ClickButtonSubmit()
        Logout.ClickAvatarLogout()
        Logout.ClickButtonLogout()
    })

})