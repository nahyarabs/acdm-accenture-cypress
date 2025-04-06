import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuario acessou o portal Tricentis', () => {
    cy.visit('/')
})

And('navegou ate a pagina Automobile', () => {
    cy.clickAutomobile()

})

When('o usuario preenche todas as abas obrigatorias com dados validos', () => {
    // Vehicle Data
    cy.selectMake()
    cy.inputKW()
    cy.inputDate()
    cy.selectNumberSeats()
    cy.selectFuelType()
    cy.inputListPrice()
    cy.inputAnnualMileage()
    cy.clickNextToInsurant()
    cy.inputFirstName()
    
    // Insurant Data
    cy.inputFirstName()
    cy.inputLastName()
    cy.inputBirthDate()
    cy.selectGender()
    cy.inputStreetAddress()
    cy.selectCountry()
    cy.inputZipCode()
    cy.inputCity()
    cy.selectOccupation()
    cy.selectHobbies()
    cy.clickNextToProductData()
    
    // Product Data
    cy.inputStartDate()
    cy.selectInsuranceSum()
    cy.selectMeritRating()
    cy.selectDamageInsurance()
    cy.checkOptionalProducts()
    cy.selectCourtesyCar()
    cy.clickNextToPriceOption()
    
    // Price Option
    cy.selectPriceOption()
    cy.clickNextToSendQuote()
    
    // Send Quote
    cy.inputEmail()
    cy.inputPhone()
    cy.inputUsername()
    cy.inputPassword()

})

And('envia o formulario', () => {
    cy.clickSend()
})

Then('o usuario vera notificacao de sucesso de envio da cotacao', () => {
    cy.validarFormPreenchido()
})

