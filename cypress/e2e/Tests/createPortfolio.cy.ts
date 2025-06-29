import { LoginPage } from '../Pages/loginPage';
import { PortfolioPage } from '../Pages/createPortfolioPage';

describe('Create Portfolio Tests', () => {
  const loginPage = new LoginPage();
  const portfolioPage = new PortfolioPage();

  it('create portfolio with timestamp', () => {
    loginPage.login('gayashani.divyanjalee@xyicon.com', 'Gaya@2493802');
    
    portfolioPage.clickCreateButton();

    const timestamp = new Date();
    const portfolioName = `Cypress Automation ${timestamp}`;

    portfolioPage.enterPortfolioName(portfolioName);
    portfolioPage.openTypeDropdown();
    portfolioPage.selectType('Office');
    portfolioPage.clickCreatePortfolio();


    // Assertion to check the created portfolio is visible in the list view
    cy.contains(portfolioName, { timeout: 10000 }).should('be.visible');
  });
});
