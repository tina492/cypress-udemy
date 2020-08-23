class PurchasePage{

    countryBox(){
        return cy.get('#country')   
    }

    termsConditionsBox(){
        return cy.get('.checkbox label')   
    }

    purchaseButton(){
        return cy.get('input[type=submit]')   
    }
    alert(){
        return cy.get('.alert')   
    }
}

export default PurchasePage


