/***
 *  What to use:
 *  Website link: https://www.amazon.de/
 *  Cypress functionalities:
 *    * visit() , click(), should() ... what ever you wish to use from previous examples 
 *      and commanst https://docs.cypress.io/api/commands/and
 *    * previous knowledge you learned this week such as Hooks
 *    * Assertions
 *    * ...
 *    * everything that is legal and SFW 
 * 
 *  In case you don't have a valid email for Amazon use "arnold@gmail.com" !!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!! not an account from Arnold so DO NOT ASK TO RESET PASSWORD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * 
 * !!! DON'T FORGET ===> 
 *  1. BEFORE AUTOMATING IT IS WISE TO REPRODUCE STEPS MANUALLY!!!
 *  2. REUSABILITY IS THE KEY FOR MANY GOOD TESTS!!!
 *  3. DETAILS, DETAILS, DETAILS and again DETAILS!!!
 *  4. if you deem test needs improvement highloght by adding *** at the end of test line.
 *  5. Reading Documentation can help
 */
 require('@cypress/xpath');
 describe('Amazon basket tests', () => {

    /**
     *              What is required from you today:
     *              * Reproduce the tests below with automated tests
     *              * Describe the tests and what are they doing accordingly 
     *                  - means don't write "test 1" for title, explain the reader what it does, 
     *                    expect that the reader is a pidgeon and needs guiding all the way
     *              * Read the multiline comment on top 3 times
     *              * Collaborate and don't be afraid to check previous examples or the documentation
     *              * Let the pain begin...
     */


/**
 *  Test 1.
 *  1. Go to Amazon webpage  https://www.amazon.de/
 *  2. Go to Black Friday deals section
 *  3. Select the Fire TV Stick section (should be under Top Deals & Lightning Deals)
 *  4. Add the Fire Stick into the basket :)
 *  5. Verify the basket has been updated
 *  6. Select option Proceed to Checkout
 *  7. Try to put in invalid email address into input
 *  8. Press continue
 */
it("Adding things from BF offer into a basket and trying to buy using a invalid email- error guessing", () => {
    cy.visit("www.amazon.de")
    cy.get('#a-autoid-0').click() //accepting all cookies 
    cy.xpath('//*[@id="icp-nav-flyout"]').click() // clicking on Language selector button
    cy.xpath("//input[@value='en_GB']//following-sibling::i").click() //Changing language to EN ***this path could be improved
    cy.get('.a-button-input').click() // Saving changes
    cy.xpath('//*[@alt="Black Friday ends at midnight"]').should('be.visible').click({force: true}) //Going to BF banner deals with brutality
    cy.wait(2000)
    cy.xpath("//div[@id='slot-5']//div[@data-deal-id='2b020a1a']//img[@alt='Fire TV Stick 4K with Alexa Voice Remote (includes TV controls)']").click() // Going to Fire Stick category 
    cy.xpath('//*[@id="octopus-dlp-asin-stream"]//a[@class="a-link-normal" and @title="Fire TV Stick 4K with Alexa Voice Remote (includes TV controls)"]').click() //Selecting Product
    cy.get('#add-to-cart-button').click() // Adding Product into a card
    cy.get('.a-size-medium-plus').should('contain','Added to Basket') // Assert to check if we see confirmation about adding to a basket 
    cy.get('#nav-cart-count').should('contain', '1') // Checking if Basket showing "1" added product
    cy.xpath('//*[@id="sc-buy-box-ptc-button"]//input').click() // Proceed to Checkout
    cy.get('#ap_email').type('arnold') // Invalid email address into input without "@"" and ".com"
    cy.xpath('//input[@id="continue"]').click() // Clicking on "Continue" button
    cy.xpath('//*[@id="auth-error-message-box"]').should('be.visible') // Checking if error alert is visible


    

    
})
   

/**
 *  Test 2.
 *  1. Go to Amazon webpage  https://www.amazon.de/
 *  2. Go to Black Friday deals section
 *  3. Select the Fire TV Stick section (should be under Top Deals & Lightning Deals)
 *  4. Select the more expensive option in the section, the 35 euro price
 *  5. Add the Fire Stick into the basket
 *  6. Verify the basket has been updated
 *  7. Search for "Javascript for Dummies" in search field
 *  8. On the list select a book that matches the full name "Javascript für Dummies"4
 *  8.5 Add book into a basket 
 *  9. Verify the basket has been updated
 *  10. Go to the Basket
 *  11. Delete the Fire TV Stick from your basket
 *  12. Verify the basket has been updated and the element is not there
 */
 it.only("Adding things from BF offer into a basket, look for another product throught searchbar, add another product, see basket, remove 1st product, verify if basket is updated", () => {
    cy.visit("www.amazon.de")
    cy.get('#a-autoid-0').click() //accepting all cookies 
    cy.xpath('//*[@id="icp-nav-flyout"]').click() // clicking on Language selector button
    cy.xpath("//input[@value='en_GB']//following-sibling::i").click() //Changing language to EN ***this path could be improved
    cy.get('.a-button-input').click() // Saving changes
    cy.xpath('//*[@alt="Black Friday ends at midnight"]').should('be.visible').click({force: true}) //Going to BF banner deals with brutality
    cy.wait(2000)
    cy.xpath("//div[@id='slot-5']//div[@data-deal-id='2b020a1a']//img[@alt='Fire TV Stick 4K with Alexa Voice Remote (includes TV controls)']").click() // Going to Fire Stick category 
    cy.xpath('//*[@id="octopus-dlp-asin-stream"]//a[@class="a-link-normal" and @title="Fire TV Stick 4K Max streaming device, Wi-Fi 6, Alexa Voice Remote (includes TV controls)"]').click() // Selecting the 2nd product
    cy.get('#add-to-cart-button').click() // Adding Product into a card
    cy.get('.a-size-medium-plus').should('contain','Added to Basket') // Assert to check if we see confirmation about adding to a basket 
    cy.get('#nav-cart-count').should('contain', '1') // Checking if Basket showing "1" added product
    cy.get('#twotabsearchtextbox').type('Javascript for Dummies') // Type into a Search
    cy.get('#nav-search-submit-button').click() // Click on Loype icon
    cy.xpath('//img[@class="s-image" and @src="https://m.media-amazon.com/images/I/510wPfXwOIL._AC_UY218_.jpg"]').click() // Click on Java book
    cy.get('#add-to-cart-button').click() // Adding Product into a card
    cy.get('.a-size-medium-plus').should('contain','Added to Basket') // Assert to check if we see confirmation about adding to a basket 
    cy.get('#nav-cart-count').should('contain', '2') // Checking if Basket showing "2" added product
    cy.xpath('//*[@id="sw-gtc"]').click() //Going into a Basket
    cy.xpath('//input[@value="Delete" and @aria-label="Delete Fire TV Stick 4K Max streaming device, Wi-Fi 6, Alexa Voice Remote (includes TV controls)"]').click() // Removing TV STICK from Basket
    cy.xpath('//div[@data-asin="B08MT4MY9J"]').should('be.visible') // Checking if we see notification about removing an item 
    cy.get('#nav-cart-count').should('contain', '1') // Checking if Basket showing "1" added product


})





 })