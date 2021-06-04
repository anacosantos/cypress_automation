/// <reference types="cypress"/>

class NavigatePage {
    textBoxElement(){
        cy.contains('Elements').click()
        cy.contains('Text Box').click()
    }
}

export default NavigatePage