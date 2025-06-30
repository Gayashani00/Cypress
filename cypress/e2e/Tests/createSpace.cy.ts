import { LoginPage } from '../Pages/loginPage';
import { PortfolioPage } from '../Pages/createPortfolioPage';
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

    portfolioPage.clickCreateButton();

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const portfolioName = `Cypress Automation ${timestamp}`;
    portfolioPage.enterPortfolioName(portfolioName);
    portfolioPage.openTypeDropdown();
    portfolioPage.selectType('Office');
    portfolioPage.clickCreatePortfolio();

    // Create Space
    spacePage.clickAddNewSpace();

    // Step 01 - Select version set
    spacePage.enterVersionSetName('Version 01');
    spacePage.clickNextButtonStep01();

    // Step 02 - Upload PDF
    spacePage.selectSpaceType('Roof Plan');
    spacePage.addNewPDF();
    spacePage.clickNextButtonStep02();

    //Step 03 - Review Space names
    spacePage.clickNextButtonStep03();

    //Step 04 - Set Scale
    spacePage.setSpaceScales();
    spacePage.enterDistance(36);
    spacePage.clickNextButtonStep04();

    //Step 05 - Create Space
    spacePage.clickCreateButtonStep05();

  });
});
