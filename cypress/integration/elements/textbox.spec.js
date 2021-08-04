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

    it('Tetsing the data was correctly filled on Text Box form and check if was submited', ()=>{
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

   it('Testing using surname instead of Full Name and check if possible submit the form', () => {
        navigatePage.textBoxElement()
        textBox.fillFullName('Carol')
        textBox.fillEmail('automationtestercarol@gmail.com')
        textBox.fillCurrentAddress('street')
        textBox.fillPermanentAddress('street2')
        textBox.submitButtonTextBox()
        cy.get('#name').should('contain', 'Carol')
        cy.get('#email').should('contain', 'automationtestercarol@gmail.com' )
        cy.get('.border #currentAddress').should('contain', 'street')
        cy.get('.border #permanentAddress').should('contain', 'street2')   
    })

    it('Testing fill in the text box form with wrong email without @ and check if possible submit the form', () => {
        navigatePage.textBoxElement()
        textBox.fillFullName('CarolTest')
        textBox.fillEmail('automationtestercarolgmail.com')
        textBox.fillCurrentAddress('street')
        textBox.fillPermanentAddress('street2')
        textBox.submitButtonTextBoxMultipleClick()
        cy.get('[id="userEmail"]').invoke('attr', 'class').should('contain', 'field-error')  
    })

    it('Testing forgot Full Name if it possible submit the form', () => {
        navigatePage.textBoxElement()
        textBox.fillEmail('automationtestercarol@gmail.com')
        textBox.fillCurrentAddress('street')
        textBox.fillPermanentAddress('street2')
        textBox.submitButtonTextBox()
        cy.get('#email').should('contain', 'automationtestercarol@gmail.com' )
        cy.get('.border #currentAddress').should('contain', 'street')
        cy.get('.border #permanentAddress').should('contain', 'street2')
    })

    it('Testing forgot current address and check if possbile submit the form', ()=>{
        navigatePage.textBoxElement()
        textBox.fillFullName('CarolTest')
        textBox.fillEmail('automationtestercarol@gmail.com')
        textBox.fillPermanentAddress('street2')
        textBox.submitButtonTextBox()
        cy.get('#name').should('contain', 'CarolTest')
        cy.get('#email').should('contain', 'automationtestercarol@gmail.com' )
        cy.get('.border #permanentAddress').should('contain', 'street2') 
    })

    it('Testing forgot permanent address and check if possible submit the form', ()=> {
        navigatePage.textBoxElement()
        textBox.fillFullName('CarolTest')
        textBox.fillEmail('automationtestercarol@gmail.com')
        textBox.fillCurrentAddress('street')
        textBox.submitButtonTextBox()
        cy.get('#name').should('contain', 'CarolTest')
        cy.get('#email').should('contain', 'automationtestercarol@gmail.com' )
        cy.get('.border #currentAddress').should('contain', 'street')
    })

    it('Testing forgot Full Name, current address and permanet address', () => {
        navigatePage.textBoxElement()
        textBox.fillEmail('automationtestercarol@gmail.com')
        textBox.submitButtonTextBox()
        cy.get('#email').should('contain', 'automationtestercarol@gmail.com' )
    })    
    
    it('Tesing put letter m before .com and check if possible bubmit the form', () => {
        navigatePage.textBoxElement()
        textBox.fillEmail('automationtestercarol@gmail.comm')
        textBox.submitButtonTextBox()
        cy.get('[id="userEmail"]').invoke('attr', 'class').should('contain', 'field-error')  
    })

    it('Testting put email without anything after @ and check if possible submit the form', ()=> {
        navigatePage.textBoxElement()
        textBox.fillEmail('automationtestercarol@')
        textBox.submitButtonTextBox()
        cy.get('[id="userEmail"]').invoke('attr', 'class').should('contain', 'field-error')  
    })

    it('Testing email.com and check if possible submit the form', ()=> {
        navigatePage.textBoxElement()
        textBox.fillEmail('automationtestercarol.com')
        textBox.submitButtonTextBox()
        cy.get('[id="userEmail"]').invoke('attr', 'class').should('contain', 'field-error')  
    })

    it.only('Testing space the middle of email and check if possible submit the form', () => {
        navigatePage.textBoxElement()
        textBox.fillEmail('automationtester carol@gmail.com')
        textBox.submitButtonTextBox()
        cy.get('[id="userEmail"]').invoke('attr', 'class').should('contain', 'field-error')
    })

    it('Testing put acute accent in any letter and check if possible submit the form', () => {
        navigatePage.textBoxElement()
        textBox.fillEmail('automationtestercárol@gmail.com')
        textBox.submitButtonTextBox()
        cy.get('[id="userEmail"]').invoke('attr', 'class').should('contain', 'field-error')
    })

})
