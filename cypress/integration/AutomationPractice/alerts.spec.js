describe('Alerts & Others', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url')+"AutomationPractice/");
      })

    it('Handle pop ups', () => {
        cy.get('.btn-style[value=Alert]').click()
        cy.get('#confirmbtn').click()
    })

    it('Handle opening tabs', () => {
        //identify the element
        //remove the attribute with jquery function - target => manipulate the dom by removing the target value
        cy.get('#opentab').invoke('removeAttr','target').click()
    })


    
})
