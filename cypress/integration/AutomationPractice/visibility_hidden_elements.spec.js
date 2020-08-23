describe('Visibility or Invisibility of elements', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url')+"AutomationPractice/");
      })

    it('Is element visible', () => {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

      
    })  

    
    
})