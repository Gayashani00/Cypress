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
  setSpaceScales(){
        cy.get('[title="Set Scale"]') .should('be.visible') .click();
        cy.get('#canvas-div').should('be.visible');
        cy.wait(1000);
 
        cy.get('#canvas-div')
        .trigger('mousedown', { clientX: 300, clientY: 200, force: true })
        .trigger('mousemove', { clientX: 330, clientY: 200, force: true })
        .wait(300)
        .trigger('mouseup', { force: true });
 
    }
 //enter distance value
    enterDistance(distance: number){
        cy.get('.PopupWindow') .should('be.visible');
        cy.get('input[type="number"]') .first() .should('be.visible') .type(distance.toString()) .type('{enter}');
    }

    // Click 'Next' button in Step 04
  clickNextButtonStep04() {
    cy.get('[data-cy="Button.Next"]').should('be.visible').click();
  } 

  // Click 'Create' button in Step 05
  clickCreateButtonStep05() {
    cy.get('.StepLabel > [data-cy="Button.Create"]').should('be.visible').click();

    //verify the success notification is displays
    cy.contains('h3','Success').should('be.visible')
  }

  
  }

