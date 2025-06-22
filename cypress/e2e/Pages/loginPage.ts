
export class LoginPage {
  visit() {
    cy.visit('/'); // This uses the baseUrl from config
  }

  enterUsername(username: string) {
    cy.get('#userName').type(username);
  }

  enterPassword(password: string) {
    cy.get('#pwInput').type(password);
  }

  clickLogin() {
    cy.get('.primary').click();
  }

  login(username: string, password: string) {
    this.visit();
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}
