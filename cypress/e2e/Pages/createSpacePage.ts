export class CreateSpacePage {
  // Click 'Add New Space' button
  private clickAddNewSpace() {
    cy.get('[data-cy="Button.Add New Space"]').click();
  }

  // Enter version set name
  private enterVersionSetName(versionName: string) {
    cy.get('.ClickToEditInput .hbox.field-input-container').type(`${versionName}{enter}`);
  }

  // Click 'Next' button Step 01
  private clickNextButtonStep01() {
    cy.get('[data-cy="Button.Next"]').should('be.visible').click();
  }

  // Upload PDF
  private selectSpaceType(spaceType: string){
        cy.contains('h3', 'Space Type').should('be.visible');
        cy.get('.SelectInput > .input').click();
        cy.get('.SelectInput__list .option').contains(spaceType).should('be.visible').click();
    }


  //Add a new PDF
  private addNewPDF(){
    cy.get('.FileDropper > input').selectFile('cypress/fixtures/ArdenOfficeFloorPlan.pdf', {force: true});
    }

   // Click 'Next' button in Step 02
  private clickNextButtonStep02() {
    cy.get('[data-cy="Button.Next"]').should('be.visible').click();
  } 

     // Click 'Next' button in Step 03
  private clickNextButtonStep03() {
    cy.get('[data-cy="Button.Next"]').should('be.visible').click();
  }
  
  //Set scale
  private setSpaceScales(){
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
  private enterDistance(distance: number){
        cy.get('.PopupWindow') .should('be.visible');
        cy.get('input[type="number"]') .first() .should('be.visible') .type(distance.toString()) .type('{enter}');
    }

    // Click 'Next' button in Step 04
  private clickNextButtonStep04() {
    cy.get('[data-cy="Button.Next"]').should('be.visible').click();
  } 

  // Click 'Create' button in Step 05
  private clickCreateButtonStep05() {
    cy.get('.StepLabel > [data-cy="Button.Create"]').should('be.visible').click();

    //verify the success notification is displays
    cy.contains('h3','Success').should('be.visible')
  }

  createSpace(versionName: string, spaceType: string, distance: number) {
    this.clickAddNewSpace();
    this.enterVersionSetName(versionName);
    this.clickNextButtonStep01();
    this.selectSpaceType(spaceType);
    this.addNewPDF();
    this.clickNextButtonStep02();
    this.clickNextButtonStep03();
    this.setSpaceScales();
    this.enterDistance(distance);
    this.clickNextButtonStep04();
    this.clickCreateButtonStep05();
  }

  
  }

