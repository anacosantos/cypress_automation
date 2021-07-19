/// <reference types="cypress"/>
import TextBoxForm from '../pageObjects/textBox'
import NavigatePage from '../pageObjects/navigatePage'

const navigatePage = new NavigatePage()
const textBox = new TextBoxForm()



describe('Filling Text Box', () => {
    
    beforeEach(() => {
        cy.visitPage()
    })
   
    it('Testing if click on elements it works and go to elements page', ()=>{
        cy.contains('Elements').click()
        cy.url().should('eq', 'https://demoqa.com/elements')
    })

    it('Check if the data was correctly filled on Text Box form', ()=>{
        navigatePage.textBoxElement()
        textBox.fillFullName('CarolTest')
        textBox.fillEmail('automationtestercarol@gmail.com')
        textBox.fillCurrentAddress('street')
        textBox.fillPermanentAddress('street2')
        textBox.submitButtonTextBox()
        cy.get('#name').should('contain', 'CarolTest')
        cy.get('#email').should('contain', 'automationtestercarol@gmail.com' )
        cy.get('.border #currentAddress').should('contain', 'street')
        cy.get('.border #permanentAddress').should('contain', 'street2')   
   })  
})
