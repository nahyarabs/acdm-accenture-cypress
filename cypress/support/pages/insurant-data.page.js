import { en_US, faker } from "@faker-js/faker"

// INSURANT DATA
const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_BIRTH_DATE = '#birthdate'
const RADIO_MALE = '#gendermale'
const RADIO_FEMALE= '#genderfemale'
const INPUT_STREET_ADDRESS = '#streetaddress'
const SELECT_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const INPUT_CITY = '#city'
const SELECT_OCCUPATION = '#occupation'
const CHECKBOX_HOBBIES = 'input[type="checkbox"][name="Hobbies"]' 

const BTN_NEXT_PRODUCT = '#nextenterproductdata'

const first_name_faker = faker.person.firstName()
const last_name_faker = faker.person.lastName()
const birth_date_faker = faker.date.birthdate({mode: 'age', min: 18, max: 65}).toLocaleDateString('en-US')
const gender_faker = faker.datatype.boolean()
const street_address_faker = faker.location.streetAddress()
const country_faker = 'Brazil'
const zip_code_faker = faker.location.zipCode('########')
const city_faker = faker.location.city()
const occupation_faker = faker.helpers.arrayElement(['Employee', 'Public Official', 'Farmer', 'Unemployed', 'Selfemployed'])
const hobbies_faker = faker.helpers.arrayElements(['Speeding', 'BungeeJumping', 'CliffDiving', 'Skydiving', 'Other'], { min: 1, max: 3 })

//// INSURANT DATA
Cypress.Commands.add('inputFirstName', () => {
    cy.get(INPUT_FIRST_NAME).type(first_name_faker)
})

Cypress.Commands.add('inputLastName', () => {
    cy.get(INPUT_LAST_NAME).type(last_name_faker)
})

Cypress.Commands.add('inputBirthDate', () => {
   cy.get(INPUT_BIRTH_DATE).type(birth_date_faker)
})

Cypress.Commands.add('selectGender', () => {
    if (gender_faker === true){
        cy.get(RADIO_MALE).click({force:true})
    }
    else {
        cy.get(RADIO_FEMALE).click({force:true})
    }
})

Cypress.Commands.add('inputStreetAddress', () => {
    cy.get(INPUT_STREET_ADDRESS).type(street_address_faker)
})

Cypress.Commands.add('selectCountry', () => {
    cy.get(SELECT_COUNTRY).select(country_faker)
})

Cypress.Commands.add('inputZipCode', () => {
    cy.get(INPUT_ZIP_CODE).type(zip_code_faker)
})

Cypress.Commands.add('inputCity', () => {
    cy.get(INPUT_CITY).type(city_faker)
})

Cypress.Commands.add('selectOccupation', () => {
    cy.get(SELECT_OCCUPATION).select(occupation_faker)
})

Cypress.Commands.add('selectHobbies', () => {
    hobbies_faker.forEach(hobby => {
      cy.get(`${CHECKBOX_HOBBIES}[value="${hobby}"]`).check({force:true})
    })
})

Cypress.Commands.add('clickNextToProductData', () => {
   cy.get(BTN_NEXT_PRODUCT).click()
})

