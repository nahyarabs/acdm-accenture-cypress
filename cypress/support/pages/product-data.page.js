import { en_US, faker } from "@faker-js/faker"

// PRODUCT DATA
const INPUT_START_DATE = '#startdate'
const SELECT_INSURANCE_SUM = '#insurancesum'
const SELECT_MERIT_RATING = '#meritrating'
const SELECT_DAMAGE_INSURANCE = '#damageinsurance'
const CHECK_OPTIONAL_PRODUCTS = 'input[type="checkbox"][name="Optional Products[]"]' 
const SELECT_COURTESY_CAR = '#courtesycar'

const BTN_NEXT_PRICE_OPTION = '#nextselectpriceoption'

const start_date_faker = faker.date.future({months: 1 }).toLocaleDateString('en-US')
const insurance_sum_faker = faker.helpers.arrayElement(['3.000.000,00', '15.000.000,00', '35.000.000,00'])
const merit_rating_faker = faker.helpers.arrayElement(['Super Bonus', 'Bonus 1', 'Malus 10'])
const damage_insurance_faker = faker.helpers.arrayElement(['No Coverage', 'Partial Coverage', 'Full Coverage'])
const optional_products_faker = faker.helpers.arrayElements(['EuroProtection', 'LegalDefenseInsurance'], { min: 1, max: 2 })
const courtesy_car_faker = faker.helpers.arrayElement(['Yes', 'No'])

//// PRODUCT DATA
Cypress.Commands.add('inputStartDate', () => {
   cy.get(INPUT_START_DATE).type(start_date_faker)
})

Cypress.Commands.add('selectInsuranceSum', () => {
    cy.get(SELECT_INSURANCE_SUM).select(insurance_sum_faker)
})

Cypress.Commands.add('selectMeritRating', () => {
    cy.get(SELECT_MERIT_RATING).select(merit_rating_faker)
})

Cypress.Commands.add('selectDamageInsurance', () => {
    cy.get(SELECT_DAMAGE_INSURANCE).select(damage_insurance_faker)
})

Cypress.Commands.add('checkOptionalProducts', () => {
    optional_products_faker.forEach(product => {
      cy.get(`${CHECK_OPTIONAL_PRODUCTS}[id="${product}"]`).check({force:true})
    })
})
Cypress.Commands.add('selectCourtesyCar', () => {
    cy.get(SELECT_COURTESY_CAR).select(courtesy_car_faker)
})

Cypress.Commands.add('clickNextToPriceOption', () => {
    cy.get(BTN_NEXT_PRICE_OPTION).click()
})



