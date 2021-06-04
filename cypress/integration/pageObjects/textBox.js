class TextBox {
   
    fillForm(){
        return cy.get('#userForm').then(form => {
            cy.wrap(form).find('[id="userName"]').type('CarolTest')
            cy.wrap(form).find('[id="userEmail"]').type('automationtestercarol@gmail.com')
            cy.wrap(form).find('[id="currentAddress"]').type('street')
            cy.wrap(form).find('[id="permanentAddress"]').type('street2')
            cy.wrap(form).find('[id="submit"]').click()
        })
    }
}




// cy.get('#output').then( output => {
        //     console.log(output)
        //     // cy.wrap(output)
        //     // cy.wrap(output)
        //     // cy.wrap(output)
        // })
export default TextBox