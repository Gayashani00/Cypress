export class PortfolioPage {
  private clickCreateButton() {
    cy.get('[data-cy="Button.Create"]').click();
  }

  private enterPortfolioName(portfolioName: string) {
    cy.get('.ClickToEditInput .hbox.field-input-container').type(portfolioName);
  }

  private openTypeDropdown() {
    cy.get(':nth-child(4) > .element > .SelectInput > .input').click();
  }

  private selectType(category: string) {
    cy.get('.SelectInput__list .option').contains(category).click();
  }

  private clickCreatePortfolio() {
    cy.get('.sidePanelButtons > [data-cy="Button.Create"]').click();
  }
  
  //search created portfolio from the grid
  private searchCreatedPortfolio(portfolioName: string){
    cy.get('.filtersAndSearch > .SearchField > input').click().clear().type(portfolioName);
    cy.contains(portfolioName).should('be.visible');
  }

  private deleteCreatedPortfolio(){
    cy.get('[data-cy="Button.Delete"]').click();
    cy.get('.PopupWindow > input').type('1');
    cy.get('[data-cy="OkButton"]').click();
  }

  private verifyDeletedPortfolio(){
    cy.contains('div', 'No results').should('be.visible');
  }


createPortfolio(portfolioName: string, category: string) {
    this.clickCreateButton();
    this.enterPortfolioName(portfolioName);
    this.openTypeDropdown();
    this.selectType(category);
    this.clickCreatePortfolio();
    this.searchCreatedPortfolio(portfolioName);
  }

  searchPortfolio(portfolioName: string){
    this.searchCreatedPortfolio(portfolioName);
  }

  deletePortfolio(){
    this.deleteCreatedPortfolio();
    this.verifyDeletedPortfolio();
  }

  
selectFirstRowCheckbox() {

  //unchcek the selected portfolio in the Grid
  cy.get('.head').find('input[type="checkbox"]').uncheck({ force: true });

 //select the deleting portfolio from the grid
  cy.get('.tr').first().find('input[type="checkbox"]').check({ force: true });
}
  
}
