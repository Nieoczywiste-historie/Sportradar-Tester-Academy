describe('Hooks around tests', () => {

    // Hooks are functinas that will be executed before or after test(s)

    // before() --> executed at start, before any test, and only once executed EXAMPLE: populate DB with mocked data
    // after() --> executed after all tests are finished, executed only once EXAMPLE: clear DB with mocked data

    // beforeEach() --> executed before each test  EXAMPLE: Log in user before test
    // afterEach() --> executed after each test EXAMPLE: Log out user after test

    // before(() => {
    //     expect(2).to.equal(2)
    // })

    // after(() => {
    //     expect(3).to.equal(3)
    // })

    beforeEach(() => {
        cy.visit('www.google.com')
    })

    afterEach(() => {
        // cy.screenshot()
        // cy.screenshot("Hooks_tests")
    })

    it('Lets see the hooks', () => {
        expect(5).to.equal(5)
    })

    it('Lets see the hooks 2', () => {
        expect(6).to.equal(6)
    })
    it('Lets see the hooks 3', () => {
        expect(7).to.equal(5)
    })

})