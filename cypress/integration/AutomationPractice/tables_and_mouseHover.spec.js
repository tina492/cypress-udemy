describe('Scan values in table', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('url')+"AutomationPractice/");
      })
      //method eq will extract the index that we are looking for
    it('Scan values for a specific Course', () => {
        cy.get('tr td:nth-child(2)').each(($element, index, $list) => {

            const textSecondColumn = $element.text()
            if (textSecondColumn.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })

    it('Mouse Hover',() =>{
        //clickin on a hidden element
        cy.get('div.mouse-hover-content').invoke('show')//tagname.class
        cy.contains('Top').click()
        cy.url().should('include','top')
    })
})
