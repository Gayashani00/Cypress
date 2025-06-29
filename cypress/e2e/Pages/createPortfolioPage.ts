export class PortfolioPage {
  clickCreateButton() {
    cy.get('[data-cy="Button.Create"]').click();
  }

  enterPortfolioName(name: string) {
    cy.get('.ClickToEditInput .hbox.field-input-container').type(name);
  }

  openTypeDropdown() {
    cy.get(':nth-child(4) > .element > .SelectInput > .input').click();
  }

  selectType(category: string) {
    cy.get('.SelectInput__list .option').contains(category).click();
  }

  clickCreatePortfolio() {
    cy.get('.sidePanelButtons > [data-cy="Button.Create"]').click();
  }
}