import { LoginPage } from '../Pages/loginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();
  
  it('login', () => {
    loginPage.login('gayashani.divyanjalee@xyicon.com', 'Gaya@2493802');
  });
});
