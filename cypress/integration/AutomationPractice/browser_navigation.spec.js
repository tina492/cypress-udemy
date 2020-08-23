describe('Browser functionality', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url')+"AutomationPractice/");
      })

    it('Backwards', () => {
        //validate URL
        cy.url().should('include','AutomationPractice')

        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.go('back')
        
    })


    
})