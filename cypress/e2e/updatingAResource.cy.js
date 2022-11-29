/// <reference types="cypress"/>

beforeEach(()=>{
    cy.sendRequest('updatingResource')
})
describe('Updating a resource', ()=>{
    it('Validating status code', ()=>{
        cy.checkStatusCode(200)
    })
    it('Validating status schema', ()=>{
        cy.validateSchema('defaultSchema')
    })
})
