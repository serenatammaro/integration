describe('login test', function () {
    it('Correctly log in', function () {
        cy.visit('https://www.shippypro.com/panel/my-couriers.html', {failOnStatusCode: false})
        cy.get(':nth-child(4) > .default-input').type('qa-challenge@shippypro.com')
        cy.get(':nth-child(7) > .default-input').type('wut2ep#i/b."D/yq')
        cy.get(':nth-child(11) > .mt-30').click()

        cy.url().should('include', '/panel/get-started')
        
   
        
    })
})