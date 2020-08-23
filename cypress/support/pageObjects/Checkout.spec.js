class Checkout{

    finalCheckoutButton(){
        return cy.get('button.btn.btn-success')   
    }
    pricePerItemTable(){
        return cy.get('tr td:nth-child(4) strong')
    }
    totalPrice(){
        return cy.get('tr td:nth-child(5) strong')
    }
 
}

export default Checkout