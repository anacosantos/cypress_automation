class TextBoxForm {

    getName(){
        return cy.get('[id="userName"]')
    }
   
    fillFullName(name){
        return this.getName().type(name)
    }

    fillEmail(email){
        cy.get('[id="userEmail"]').type(email)
    }

    fillCurrentAddress(currentAddress){
        cy.get('[id="currentAddress"]').type(currentAddress)
    }

    fillPermanentAddress(permanentAddress){
        cy.get('[id="permanentAddress"]').type(permanentAddress)
    }

    submitButtonTextBox() {
        cy.get('[id="submit"]').click()
    }

    filledFullName(){
        cy.get('#name')
        return this
    }

    // filledEMail(){
    //     cy.get('#email').should('contain', 'automationtestercarol@gmail.com' )
    // }

    // filledCurrentAddress(){
    //     cy.get('.border #currentAddress').should('contain', 'street')
    // }

    // filledPermanentAddress(){
    //     cy.get('.border #permanentAddress').should('contain', 'street2')
    // }
}



export default TextBoxForm

