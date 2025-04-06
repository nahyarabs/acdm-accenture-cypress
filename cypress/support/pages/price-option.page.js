import { en_US, faker } from "@faker-js/faker"

// PRICE OPTION
const RADIO_PRICE_OPTION = 'input[name="Select Option"]'

const BTN_NEXT_SEND_QUOTE = '#nextsendquote'

const price_option_faker = faker.helpers.arrayElement(['Silver', 'Gold', 'Platinum', 'Ultimate'])

//// PRICE OPTION
Cypress.Commands.add('selectPriceOption', () => {
    cy.get(`${RADIO_PRICE_OPTION}[value="${price_option_faker}"]`).check({ force: true })
  })

Cypress.Commands.add('clickNextToSendQuote', () => {
    cy.get(BTN_NEXT_SEND_QUOTE).click()
})

