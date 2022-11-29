/// <reference types="cypress"/>

beforeEach(()=>{
    cy.sendRequest('creatingResourse')
})
describe('Creating a resource', ()=>{
    it('Validating status code', ()=>{
        cy.checkStatusCode(201)
    
    })
    it('Validating status schema', ()=>{    
        cy.validateSchema('defaultSchema')
    })
})