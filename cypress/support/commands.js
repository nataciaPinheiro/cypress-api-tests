// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Ajv from "ajv"
const ajv = new Ajv()

Cypress.Commands.add('sendRequest', (payload) =>{
    cy.fixture('/payload_options/'+payload).then(json =>{
        cy.request(json).as('response')
    })
    cy.get('@response').then(response => {
        cy.log(JSON.stringify(response.body))
   })
})

Cypress.Commands.add('checkStatusCode',(expectedStatus)=>{
    cy.get('@response').then(response => {
        expect(response.status).to.be.equals(expectedStatus)
   })

})

const getSchemaError = (getAjvError) => {
    return cy.wrap(
      `Field: ${getAjvError[0]["dataPath"]} is invalid. Cause: ${getAjvError[0]["message"]}`
    )
}

/**
 * Comando para validar o schema
 * @param {string} schema com o nome do arquivo em fixtures/schemas/
 * Retorna um erro caso o teste de schema falhe
 */
 Cypress.Commands.add('validateSchema', (schema) => {
    cy.get('@response').then(res => {
        cy.fixture('/schemas/'+schema).then( jsonSchema => {
            const validate = ajv.compile(jsonSchema);
            const valid = validate(res.body)
      
            if (!valid) {
                getSchemaError(validate.errors).then((schemaError) => {
                    
                    throw new Error(schemaError)
                })
            } else {
                let js = {}
                Object.entries(res.body).forEach(([key, value]) => {
                    js[`${key}`] = `${value}`
                })
                cy.log(`${JSON.stringify(js, null, 3)}`)
                
            }  
        })
    })
})

