/// <reference types="cypress"/>

describe('My first Test', () => {
    
    beforeEach(() => {
        cy.visitPage()
    })
   
    it('Testing elements - text box functionalities', ()=>{
        cy.contains('Elements').click()
        cy.url().should('eq', 'https://demoqa.com/elements')
    })

})
