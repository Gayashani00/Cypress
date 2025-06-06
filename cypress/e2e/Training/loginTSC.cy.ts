it('login test', function() {
    cy.visit('https://qaapp.xyicon.com/')

    cy.get('#userName').type('gayashani.divyanjalee@xyicon.com')

    cy.get('#pwInput').type('Gaya@2493802')

    cy.get('.primary').click()
})