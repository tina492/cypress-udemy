describe('My First Test', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url')+"seleniumPractise/#/");
      })

    it('Search for an item, add it to cart', () => {
        cy.get('.search-keyword').type('ca');
        cy.get('.product:visible')
            .should('have.length', 4)

       cy.get('.products').find('.product').each(($element, index, $list) => {
            const nameOfItem = $element.find('h4.product-name').text()
            if (nameOfItem.includes("Cashews"))
            {
                $element.find('button').click()
            }
            if (nameOfItem.includes("Carrot"))
            {
                $element.find('button').click()
            }
       })

       cy.get('.cart-icon').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.contains('Place Order').click()


    })

    
    
})