import { en_US, faker } from "@faker-js/faker"

// VEHICLE DATA
const BTN_AUTOMOBILE = '#nav_automobile'
const SELECT_MAKE = '#make'
const INPUT_KW = '#engineperformance'
const INPUT_DATE_MANUFACTURE = '#dateofmanufacture'
const SELECT_NUMBER_SEATS = '#numberofseats'
const SELECT_FUEL_TYPE = '#fuel'
const INPUT_LIST_PRICE = '#listprice'
const INPUT_ANNUAL_MILEAGE = '#annualmileage'

const BTN_NEXT_INSURANT = '#nextenterinsurantdata'

const mark_faker = faker.helpers.arrayElement(['Audi', 'BMW', 'Ford', 'Honda', 'Mazda', 'Nissan', 'Volvo', 'Volkswagen', 'Toyota', 'Suzuki']) //array de valores
const kw_faker = faker.number.int({min: 1, max: 2000})
const date_faker = faker.date.past().toLocaleDateString('en-US')
const number_seats_faker = faker.number.int({min: 1, max: 9})
const fuel_type_faker = faker.helpers.arrayElement(['Petrol', 'Diesel', 'Electric Power', 'Gas', 'Other'])
const list_price_faker = faker.number.int({min: 500, max: 10000})
const annual_mileage_faker = faker.number.int({min: 100, max: 10000})

//// VEHICLE DATA
Cypress.Commands.add('clickAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
})

Cypress.Commands.add('selectMake', () => {
    cy.get(SELECT_MAKE).select(mark_faker)
})

Cypress.Commands.add('inputKW', () => {
    cy.get(INPUT_KW).type(kw_faker)
})

Cypress.Commands.add('inputDate', () => {
    cy.get(INPUT_DATE_MANUFACTURE).type(date_faker)
})

Cypress.Commands.add('selectNumberSeats', () => {
    cy.get(SELECT_NUMBER_SEATS).select(number_seats_faker)
})

Cypress.Commands.add('selectFuelType', () =>{
    cy.get(SELECT_FUEL_TYPE).select(fuel_type_faker)
})

Cypress.Commands.add('inputListPrice', () =>{
    cy.get(INPUT_LIST_PRICE).type(list_price_faker)
})

Cypress.Commands.add('inputAnnualMileage', () =>{
    cy.get(INPUT_ANNUAL_MILEAGE).type(annual_mileage_faker)
})

Cypress.Commands.add('clickNextToInsurant', () =>{
    cy.get(BTN_NEXT_INSURANT).click()
})



