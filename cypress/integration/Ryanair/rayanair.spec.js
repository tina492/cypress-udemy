describe('Testing Rayanair', () => {

    beforeEach(() => {
        cy.visit('https://www.ryanair.com/es/es')
      })

    it('One Way Flight', () => {
        //LogIn -> Guardar como una funcion en support
        cy.contains('Inicia sesión').click()
        cy.get('input[type=email]').type('rubiocabezali@hotmail.com')
        cy.get('input[type=password]').type('Sclubseven1.')
        cy.get('.auth-submit__button').click()
        cy.get('.ry-header__user-name').should('have.text','Virginia')

        //Elegir Ida
        cy.get('button[aria-label=Ida]').click()
        cy.get('input[placeholder=Salida]').clear().type('Bilbao').should('have.value','Bilbao')
        cy.get('input[placeholder=Destino]').click().type('London Southend')
        cy.get('.flight-search-widget__start-search').click()
        


        
    })









})