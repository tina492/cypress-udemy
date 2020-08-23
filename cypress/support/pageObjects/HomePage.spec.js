class HomePage{

    nameBox(){
        return cy.get('input[name=name]:nth-child(2)')   
    }
    automaticNameBox(){
        return cy.get('input[name=name]:nth-child(1)')   
    }
    emailBox(){
        return cy.get('input[name=email]')
    }
    passwordBox(){
        return cy.get('input[type=password]')
    }    
    likeIceCreamCheckBox(){
        return cy.get('#exampleCheck1')
    }    
    genderDropDown(){
        return cy.get('select')
    }    
    studentStatusRadio(){
        return cy.get('#inlineRadio1')
    }  
    disabledRadioButton(){
        return cy.get('#inlineRadio3')
    }  
    date(){
        return cy.get('input[name=bday]')
    } 
    submitButton(){
        return cy.get('input[type=submit]')
    }  
    shopTab(){
        return cy.get('.nav-item:nth-child(2)')
    } 

    
}

export default HomePage