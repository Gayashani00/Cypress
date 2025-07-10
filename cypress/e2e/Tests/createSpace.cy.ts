import { LoginPage } from '../Pages/loginPage';
import { PortfolioPage } from '../Pages/portfolioPage';
import { CreateSpacePage } from '../Pages/createSpacePage';

describe('Create Space Tests', () => {
  const loginPage = new LoginPage();
  const portfolioPage = new PortfolioPage();
  const spacePage = new CreateSpacePage();

  //login
   beforeEach(() => {
    loginPage.login('gayashani.divyanjalee@xyicon.com', 'Gaya@2493802');
  });

  it('should create a space with version set and upload PDF', () => {
    // Create a portfolio
    const timestamp = new Date();
    const portfolioName = `Cypress Automation ${timestamp}`;
    portfolioPage.createPortfolio(portfolioName,'Office')

    spacePage.createSpace('Version 01', 'Roof Plan', 36 )
  });
});