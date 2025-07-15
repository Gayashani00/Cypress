import { LoginPage } from '../Pages/loginPage';
import { PortfolioPage } from '../Pages/portfolioPage';

describe('Create Portfolio Tests', () => {
  
  const loginPage = new LoginPage();
  const portfolioPage = new PortfolioPage();

  it('create portfolio with timestamp', () => {
    loginPage.login('gayashani.divyanjalee@xyicon.com', 'Gaya@2493802');

    const timestamp = new Date();
    const portfolioName = `Cypress Automation ${timestamp}`;
    portfolioPage.createPortfolio(portfolioName,'Office');
    portfolioPage.deletePortfolio();
  
  });


});
