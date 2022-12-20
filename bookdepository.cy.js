require('@cypress/xpath');
describe('bookdepository tests', () => {
   
/**
*  Test 1.
*  1. go to www.bookdepository.com
2. accept cookies
3. go to search and type cypress automation
4. select the book - Automated Software Testing with Cypress
5. ad this book to the basket
6. verify that the book was added
7. continue shopping
8. go to best crime and thriller books
9. select the book in Scandi crime - Faceless Killers
10. ad the book into the basket
11. verify if the book was added
12. go to advanced search
13. select in the advanced search only German books
14. filter your search and type the Author - Rowling and click the button refine search
15. add this book - Harry Potter Und Der Stein Der Weisen to your cart
16. go to your basket and delete the Automated Software testing book
17. verify that the book was deleted
18. click on the Book Depository logo
*/

it("Adding books to basket, veryfication, checking search ", () => {
   cy.viewport(1280, 800) // setings for Macbook 13 
   cy.visit("https://www.bookdepository.com/")
   cy.get('.btn-yes').click() // accepting all cookies
   cy.get('.text-input').type('Cypress automation') //Searching for a book
   cy.get('.header-search-btn').click() // Click for Searching button
   cy.xpath('//img[@data-lazy="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3676/9780367699543.jpg"]').click() // take the first book with this title
   cy.get('.checkout-tools > .btn-wrap > .btn-primary').click() // add to basket
   cy.wait(2000)
   cy.get('.modal-title').should('be.visible').should('contain','Item added to your basket') //checking if we added into a basket
   cy.get('.basket-info > .btn-grey').click() // continue shopping
   cy.xpath('//li[@class="tbd-dropdown category-dropdown mob-nav-shop dropdown"]//a[@class="tbd-dropdown-toggle desktop-only"]').trigger('mouseover') // open a dropdown menu 
   cy.xpath('//ul[@class="category-dropdown-list vertical-dropdown-list"]//li[@class="top-category" and @data-order="10"]//a[@href="/category/2616/Crime-Thriller"]').click({force: true}) // select a Crime and Thriller category
   cy.get(':nth-child(6) > .block > .carousel-wrap > .tab-wrap > .tab > :nth-child(4) > .item-img > a > .lazy').click() // selecting a book .code should be changed 
   cy.get('.checkout-tools > .btn-wrap > .btn-primary').click()
   cy.wait(2000)
   cy.get('.modal-title').should('be.visible').should('contain','Item added to your basket') //checking if we added into a basket
   cy.get('.basket-info > .btn-grey').click() // continue shopping
   cy.get('.advanced-search').click() // clicking on advanced search button
   cy.get('#filterLang').select('German') // Dropdown box with Languages
   cy.xpath('//input[@class="form-control" and @name="searchAuthor"]').type('Rowling') // Typing 'Rowling' into search Autor
   cy.get('.col-xs-12 > .form-group > .btn').click() // Click on search button
   cy.xpath('//a[@href="/basket/addisbn/isbn13/9783551354013"]').click() // Adding 1st book into a basket
   cy.get('.modal-title').should('be.visible').should('contain','Item added to your basket') //checking if we added into a basket
   cy.get('.basket-info > .btn-primary').click() // basket checkout button
   cy.xpath('//form[@data-isbn="9780367699543"]//button[@type="submit" and @class="btn remove-btn"]').click() // remove book from busket
   cy.get('.brand-link > img').click() // going to main menu by logo 

   
   
})

})