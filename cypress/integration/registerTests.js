/// <reference types="cypress" />

describe('Test Registration', () => {

    it('can register', () => {
        cy.visit('http://localhost:3000')
            .then(() => {
                cy.get('input[name=firstName]').click().type('Bryan')
            })
            .then(() => {
                cy.get('input[name=lastName]').click().type('Overbey')
            })
            .then(() => {
                cy.get('input[name=npiNumber]').click().type('000111222')
            })
            .then(() => {
                cy.get('input[name=streetAddress]').click().type('5213 Pennington Ave')
            })
            .then(() => {
                cy.get('input[name=city]').click().type('Donelson')
            })
            .then(() => {
                cy.get('[id="state"]')
                    .click({ force: true })
                    .wait(500)
                    .get('[data-value="TN"]')
                    .click({ force: true })
            })
            .then(() => {
                cy.get('input[name=zipCode]').click().type('37214')
            })
            .then(() => {
                cy.get('input[name=phoneNumber]').click().type('6152901788')
            })
            .then(() => {
                cy.get('input[name=email]').click().type('bryanmorganoverbey@gmail.com')
            })
            .then(() => {
                cy.get('button[type=submit]').click({ force: true})
            })
    })
})