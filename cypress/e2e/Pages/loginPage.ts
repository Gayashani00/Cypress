
export class LoginPage {
  visit() {
    cy.visit('/'); // This uses the login URL from config file
  }

  private enterUsername(username: string) {
    cy.get('#userName').type(username);
  }

  private enterPassword(password: string) {
    cy.get('#pwInput').type(password);
  }

  private clickLogin() {
    cy.get('.primary').click();
  }

  login(username: string, password: string) {
    this.visit();
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}
