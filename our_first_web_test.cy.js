require('@cypress/xpath');


describe('Web testing Google- Cookies click', () => {

    // Visit Google search
    // it('Visit google search page and search for "cypress" word',() => {
    //     cy.visit('www.google.com')

    //     cy.get("#W0wltc").click()

    //     cy.get("input.gLFyf").type("cypress{enter}")

    //     cy.get("a[href='https://www.cypress.io/']").should('be.visible')
    // })
    

    /**
     *  XPATH for button: //button[@id='W0wltc']
     *  CSS locator of button: #W0wltc
     */
 // Visit Google search
 it('Visit google search page and search for "cypress" word',() => {
    cy.visit('www.google.com')                                                                                                                                                                                           

    cy.xpath('//*[@id="W0wltc"]').click()

    cy.xpath('//*[@class="gLFyf"]').type("cypress{enter}")

    cy.xpath('//a[@href="https://www.cypress.io/"]').should('be.visible')
})

    

})