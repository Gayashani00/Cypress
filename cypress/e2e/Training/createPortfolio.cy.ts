// Create a portfolio

it('create portfolio test', function() {
    cy.visit('https://qaapp.xyicon.com/')

    cy.get('#userName').type('gayashani.divyanjalee@xyicon.com')

    cy.get('#pwInput').type('Gaya@2493802')

    cy.get('.primary').click()

    cy.get('[data-cy="Button.Create"]').click()

    cy.log('This is a log message')

    cy.get('.ClickToEditInput .hbox.field-input-container')
  .should('exist') // Optional: ensure the element is present
  .invoke('html')
  .then((innerHtml) => {
    cy.log('Inner HTML:', innerHtml);
    console.log('Inner HTML:', innerHtml);
  });

  //enter portfolio name with timestamp
  const timestamp = new Date() 
  const portfolioName = `Cypress Automation ${timestamp}`;

  cy.get('.ClickToEditInput .hbox.field-input-container')
  .type(portfolioName);

//   cy.get('.ClickToEditInput .hbox.field-input-container').type('Cypress Automation')

  cy.get(':nth-child(4) > .element > .SelectInput > .input').click()

  //select the option from the dropdown
  cy.get('.SelectInput__list .option')
  .contains('Office')
  .click();

  //click on the Create button
  cy.get('.sidePanelButtons > [data-cy="Button.Create"]').click()

  cy.get('[data-cy="Button.Add New Space"]').click()

  const spaceName = `Floor ${timestamp}`;

  cy.get('.ClickToEditInput .hbox.field-input-container').type(spaceName);
  
  cy.get('.DateTimeInput > .ClickToEditInput > .unfocused').click()
 
  cy.get('[data-cy="Button.Next"]').click()

})
