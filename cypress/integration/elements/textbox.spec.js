/// <reference types="cypress"/>
import TextBox from '../pageObjects/textBox'
import NavigatePage from '../pageObjects/navigatePage'

const navigatePage = new NavigatePage()
const textBox = new TextBox()



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
        textBox.fillForm()
    })
    
})
