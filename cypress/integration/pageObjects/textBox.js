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
}



export default TextBoxForm

