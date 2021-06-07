class TextBoxForm {
   
    fillFullName(){
        cy.get('[id="userName"]').type('CarolTest')
    }

    fillEmail(){
        cy.get('[id="userEmail"]').type('automationtestercarol@gmail.com')
    }

    fillCurrentAddress(){
        cy.get('[id="currentAddress"]').type('street')
    }

    fillPermanentAddress(){
        cy.get('[id="permanentAddress"]').type('street2')
    }

    submitFormTextBox() {
        cy.get('[id="submit"]').click()
    }
}

export default TextBoxForm

