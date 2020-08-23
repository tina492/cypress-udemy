describe('My Third Test', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url')+"AutomationPractice/");
      })

    it('Radio buttons', () => {

        cy.get('.radioButton').first().check().should('be.checked')
        cy.get('.radioButton').check('radio2')
    })

    it('Autocomplete/dyanmic dropdown', () => {
        //we need to loop through all the options, as we don't know which order India will be at
        //When we type "Ind", we get 3 options in the dropdodwn. We need to iterate through those options.
        //We grab the class of the first parent -> .ui-menu-item, add space and the next div that we want "Indonesia"

        cy.get('#autocomplete').type('Ind')

        cy.get('.ui-menu-item div').each(($element, index, $list) => {
            if ($element.text()==="Indonesia")
            {
                $element.click()
            }
       })
       //Verify that Indonesia has been picked up
       cy.get('#autocomplete').should('have.value','Indonesia')

    })

    it('Static Dropdown', () => {
        //since there is one select (tagname) on the DOM, we pick that one. And then we can parse the option name or the attribute.
        cy.get('select').select('option1').should('have.value', 'option1') //he confirmado que have.value es el codigo, no nombre

    })

    it('Checkboxes', () => {
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //check all of them. Find the common element
        cy.get('input[type=checkbox]').check()
        //check an array of elements -> including the values in the array
        cy.get('input[type=checkbox]').uncheck(['option1', 'option2'])
    })

})