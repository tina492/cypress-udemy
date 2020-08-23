describe('My First Test', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url')+"seleniumPractise/#/");
      })

    it('Search for an item, add it to cart', () => {
        cy.get('.search-keyword').type('ca');
        cy.get('.product:visible')
            .should('have.length', 4)

       //Parent child equivalent to above: cy.get('.products').find('.product').should('have.length',4)
       //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() not good, because 2 might change to 10
       cy.get('.products').find('.product').each(($element, index, $list) => {
            const nameOfItem = $element.find('h4.product-name').text()
            if (nameOfItem.includes("Cashews"))
            {
                $element.find('button').click()
            }
       })

       cy.get('.brand').then(function(logo){
            cy.log(logo.text())
       })
       cy.get('.brand').should('have.text','GREENKART')
    })

    
    
})