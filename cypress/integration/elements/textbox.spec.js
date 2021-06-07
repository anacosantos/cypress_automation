/// <reference types="cypress"/>
import TextBoxForm from '../pageObjects/textBox'
import NavigatePage from '../pageObjects/navigatePage'

const navigatePage = new NavigatePage()
const textBox = new TextBoxForm()



describe('My first Test', () => {
    
    beforeEach(() => {
        cy.visitPage()
    })
   
    it('Testing if elements click works', ()=>{
        cy.contains('Elements').click()
        cy.url().should('eq', 'https://demoqa.com/elements')
    })

    it.only('Testing elements - text box functionalities', ()=>{
        navigatePage.textBoxElement()
        textBox.fillFullName()
        textBox.fillEmail()
        textBox.fillCurrentAddress()
        textBox.fillPermanentAddress()
        textBox.submitFormTextBox()
    })
    
})
