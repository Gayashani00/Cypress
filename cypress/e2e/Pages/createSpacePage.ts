export class CreateSpacePage {
  // Click 'Add New Space' button
  clickAddNewSpace() {
    cy.get('[data-cy="Button.Add New Space"]').click();
  }

  // Enter version set name
  enterVersionSetName(versionName: string) {
    cy.get('.ClickToEditInput .hbox.field-input-container').type(`${versionName}{enter}`);
  }

  // // Select date (click on date picker)
  // clickDatePicker() {
  //   cy.get('.DateTimeInput > .ClickToEditInput > .unfocused').click();
  // }

  // Click 'Next' button Step 01
  clickNextButtonStep01() {
    cy.get('[data-cy="Button.Next"]').should('be.visible').click();
  }

  // Upload PDF
selectSpaceType(spaceType: string){
        cy.contains('h3', 'Space Type').should('be.visible');
        cy.get('.SelectInput > .input').click();
        cy.get('.SelectInput__list .option').contains(spaceType).should('be.visible').click();
    }


  //Add a new PDF
  addNewPDF(){
    cy.get('.FileDropper > input').selectFile('cypress/fixtures/ArdenOfficeFloorPlan.pdf', {force: true});
    }

   // Click 'Next' button in Step 02
  clickNextButtonStep02() {
    cy.get('[data-cy="Button.Next"]').should('be.visible').click();
  } 

     // Click 'Next' button in Step 03
  clickNextButtonStep03() {
    cy.get('[data-cy="Button.Next"]').should('be.visible').click();
  }
  
  //Set scale
  setScale(){
    
  }
  }

