/// <reference types="cypress"/>

beforeEach(()=>{
    cy.sendRequest('gettingResource')
})
describe('Getting a resource', ()=>{
    it('Validating status code', ()=>{
        cy.checkStatusCode(200)

    })
    it('Validating status schema', ()=>{
        cy.validateSchema('defaultSchema')

    })
})
    