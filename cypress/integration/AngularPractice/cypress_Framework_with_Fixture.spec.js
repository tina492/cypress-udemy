import HomePage from '../../support/pageObjects/HomePage.spec'
import ShopPage from '../../support/pageObjects/ShopPage.spec'
import Checkout from '../../support/pageObjects/Checkout.spec'
import PurchasePage from '../../support/pageObjects/PurchasePage.spec'

describe('e2e angular automation framework', () => {

    beforeEach(function() {

        cy.fixture('inputForm')
            .then((data) => {
            this.data = data
        })
      })

    it('Fill out input from fixture file', function() {
       const homePage = new HomePage()

       cy.visit(Cypress.env('url')+"angularpractice")

       homePage.nameBox().type(this.data.name)
       homePage.emailBox().type(this.data.email).should('have.value','virginia.rubio@hotmail.com')
       homePage.passwordBox().type(this.data.password)
       homePage.likeIceCreamCheckBox().check().should('be.checked')
       homePage.genderDropDown().select(this.data.gender).should('have.value', 'Female')
       homePage.studentStatusRadio().check().should('be.checked').and('have.value','option1')
       homePage.date().type(this.data.dob)
       //Validate
       homePage.automaticNameBox().should('have.value',this.data.name)    
       homePage.nameBox().should('have.attr','minlength','2')
       homePage.disabledRadioButton().should('not.be.checked').and('be.disabled')

       
    })

    it('Navigate to the shop and add an item', function() {
        const homePage = new HomePage()
        const shopPage = new ShopPage()
        const checkout = new Checkout()
        const purchasePage = new PurchasePage()

        homePage.shopTab().click()
        cy.url().should('include','shop')

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })

       shopPage.checkoutButton().click()
       //total amount at checkout
       var sum = 0
       var total = 0
       checkout.pricePerItemTable().each(($el, index, $list) => {
            const price = $el.text()
            var strPrecio = price.split(" ")   
            strPrecio = strPrecio[1].trim()
            sum = Number(sum) + Number(strPrecio)       
       }).then(function(){
            cy.log(sum) 
       })
       checkout.totalPrice().then(function(element){
           const price = element.text()
           total = price.split(" ")
           total = total[1].trim()
       })
       //Compare total value is sum
       expect(Number(total)).to.equal(sum)


       checkout.finalCheckoutButton().click()
       purchasePage.countryBox().type(this.data.country).should('have.value','United Kingdom')
       purchasePage.termsConditionsBox().click()//.should('be.checked')
       purchasePage.purchaseButton().click()
       //purchasePage.alert().should('contain.text','\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n')
       //Another way -> Regular expression
       purchasePage.alert().then(function(element){
           const textAlert = element.text()
           expect(textAlert.includes("Success")).to.be.true
       })
       
   })

   

    
})