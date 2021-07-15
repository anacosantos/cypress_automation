/// <reference types="cypress"/>
import TextBoxForm from '../pageObjects/textBox'
import NavigatePage from '../pageObjects/navigatePage'

const navigatePage = new NavigatePage()
const textBox = new TextBoxForm()



describe('Filling Text Box', () => {
    
    beforeEach(() => {
        cy.visitPage()
        //cy.url().should('eq', 'https://demoqa.com/elements')
    })
   
    it('Testing if elements click works', ()=>{
        cy.contains('Elements').click()
        cy.url().should('eq', 'https://demoqa.com/elements')
    })

    it.only('Check if the data was correctly filled', ()=>{
        navigatePage.textBoxElement()
        textBox.fillFullName('CarolTest')
        textBox.fillEmail('automationtestercarol@gmail.com')
        textBox.fillCurrentAddress('street')
        textBox.fillPermanentAddress('street2')
        textBox.submitButtonTextBox()
        cy.wait(2000)
        cy.get('#name').should('contain', 'CarolTest')
        cy.get('#email').should('contain', 'automationtestercarol@gmail.com' )
        cy.get('.border #currentAddress').should('contain', 'street')
        cy.get('.border #permanentAddress').should('contain', 'street2')


    //    textBox.filledFullName().should('contain', 'CarolTest')
        //expect(textBox.getName()).equal(cy.get('#name'))
        //textBox.filledFullName()
        // textBox.filledEMail()
        // textBox.filledCurrentAddress()
        // textBox.filledPermanentAddress()      
    })
    
})
