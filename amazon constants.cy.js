
  /**
   *  Test 4.
   *  1. Go to Amazon webpage https://www.amazon.de/?language=de_DE
   *  2. Accept ALL the necesarry cookies
   *  3. Change the language from DE to EN
   *  4. Go to sign in page (via the Header = "Account and Lists menu")
   *  5. Try to add VALID e-mail and press the Continue button
   *  6. Verify Password section is present on page
   */
   
   beforeEach(() => {
    cy.visit("www.amazon.de/?language=de_DE")
  })

  const necessaryCookies = ("#sp-cc-customize")
  const confirmCookies = ("input[aria-labelledby='savePrefs-announce']")
  const languageSelection = ("span[class='icp-nav-flag icp-nav-flag-de icp-nav-flag-discoverability-t1']")
  const englishLanguage = ("input[value='en_GB'] + i")
  const saveLanguage = ("input[aria-labelledby='icp-save-button-announce']")
  const confirmEnglish = ("a[data-csa-c-content-id='nav_cs_books']")
  const goToLogIn = ("span[id='nav-link-accountList-nav-line-1']")
  const updateEmail = ("input[id='ap_email']")

   describe('Amazon DE tests', () => {
  it.only("Test 3", () => {
    cy.get(necessaryCookies).click()
    cy.get(confirmCookies).click()
    cy.get(languageSelection).click()
    cy.get(englishLanguage).click()
    cy.get(saveLanguage).click()
    cy.get(confirmEnglish).should('contain','Books')
    cy.get(goToLogIn).click()
    cy.get(updateEmail).type('arnold@gmail.com{enter}')
    cy.url().should('include','signin')  // verify password section is present on the page
    
    // cy.get("#sp-cc-customize").click() //necesarry cookies option
    // cy.xpath("//input[@aria-labelledby='savePrefs-announce']").click() // confirm only necesarry cookies
    // cy.xpath("//span[@class='icp-nav-flag icp-nav-flag-de icp-nav-flag-discoverability-t1']").click() // go to language settings
    // cy.xpath("//input[@value='en_GB']//following-sibling::i").click() // change language to EN
    // cy.get("input[aria-labelledby='icp-save-button-announce']").click() // save EN language settings
    // cy.xpath("//a[@data-csa-c-content-id='nav_cs_books']").should('contain','Books') // verify if the langauge was changed
    // cy.xpath("//span[@id='nav-link-accountList-nav-line-1']").click() // go to LogIn
    // cy.xpath("//input[@id='ap_email']").type('arnold@gmail.com{enter}') // ener email adress and hit enter
    // cy.url().should('include','signin') // verify password section is present on the page

 
})
})