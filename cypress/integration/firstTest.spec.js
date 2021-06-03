/// <reference types="cypress"/>

describe('My first Test', () => {
    
    beforeEach(() => {
        cy.visit("https://demoqa.com/")
    })
   
    it('verify if enter on web page', ()=>{
        cy.contains('Elements').click()
        cy.url().should('eq', 'https://demoqa.com/elements')
    })

})
