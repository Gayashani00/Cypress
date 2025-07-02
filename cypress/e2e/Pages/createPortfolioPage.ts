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

  private searchCreatedPortfolio(portfolioName: string){
    cy.get('.filtersAndSearch > .SearchField > input').click().clear().type(portfolioName);
    cy.contains(portfolioName).should('be.visible');
  }


createPortfolio(portfolioName: string, category: string) {
    this.clickCreateButton();
    this.enterPortfolioName(portfolioName);
    this.openTypeDropdown();
    this.selectType(category);
    this.clickCreatePortfolio();
    this.searchCreatedPortfolio(portfolioName);
  }
}