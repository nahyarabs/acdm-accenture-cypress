import { en_US, faker } from "@faker-js/faker"

// SEND QUOTE
const INPUT_EMAIL = '#email'
const INPUT_PHONE = '#phone'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'

const BTN_SEND = '#sendemail'

const phone_faker = faker.string.numeric(11)

//// SEND QUOTE
Cypress.Commands.add('inputEmail', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email'))
})

Cypress.Commands.add('inputPhone', () => {
    cy.get(INPUT_PHONE).type(phone_faker)
})

Cypress.Commands.add('inputUsername', () => {
    cy.get(INPUT_USERNAME).type(Cypress.env('username'), {log:false})
})

Cypress.Commands.add('inputPassword', () => {
    cy.get(INPUT_PASSWORD).type(Cypress.env('password'), {log:false})
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('password'), {log:false})
})

Cypress.Commands.add('clickSend', () => {
    cy.get(BTN_SEND).click()
})

Cypress.Commands.add('validarFormPreenchido', () => {
    cy.wait(10000)
    cy.get('h2').should('contain.text', 'e-mail').and('contain.text', 'success')
})
