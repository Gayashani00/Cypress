import { LoginPage } from '../Pages/loginPage';
import { PortfolioPage } from '../Pages/portfolioPage';

describe('Create a portfolio by API call', ()=>{

    const timestamp = new Date(); 
    const portfolioName = `Cypress Automation${timestamp}`; 
    const loginPage = new LoginPage();
    const portfolioPage = new PortfolioPage();


    it('Create Portfolio' ,()=>{

        //create a portfolio by a API call
        cy.request({
            method: 'PUT',
            url: 'https://qaapi.xyicon.com/portfolios/create',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTBjZGU2NC05ZjNkLTRkNWYtOWUzZC02NTViZjhjMTM0ZWIiLCJzdWIiOiI1NzJiM2QyZS0xNWJkLTRkMTItOThkZS03ZjI4NzAzMmQyN2MiLCJ1bmlxdWVfbmFtZSI6IkdheWFzaGFuaSBEaXZ5YW5qYWxlZSIsImF1dGhfdGltZSI6IjcvMTUvMjAyNSA4OjU3OjU1IEFNIiwiaWF0IjoxNzUyNTY5ODc1LCJpc3MiOiJodHRwczovL3FhYXBpLnh5aWNvbi5jb20iLCJhdWQiOiJodHRwczovL3FhYXBpLnh5aWNvbi5jb20iLCJzcm9pIjoiOTA1ODhjOWMtM2M0OS00YzM0LThlODktMTk2Mzg5ZWI5YzJkIiwic3JwaSI6IjU5YzVhMmQ2LTliMjQtNDE4YS05NWQ2LWE3OGU0NmY3MWM5ZSIsInNyYWNpIjoiNjA3ZWNiNzYtODUzNy00ZWRlLThhMGYtMmUyMTkzOWZkMmZmIiwic3JlYWkiOiIiLCJzcm91bWkiOiI3ODc0YzlkNi1lZGU2LTQ2MjEtOTFlYS05ZGIwMjlmMjUyMzQiLCJzcm9wc2kiOiI3ODc0YzlkNi1lZGU2LTQ2MjEtOTFlYS05ZGIwMjlmMjUyMzQiLCJzcnBwc2kiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJzcnVhIjoiVHJ1ZSIsInNyY2UiOiJUcnVlIiwic3JlZSI6IlRydWUiLCJzcnBlIjoiVHJ1ZSIsInNyYmUiOiJUcnVlIiwic3JzZSI6IlRydWUiLCJzcnhlIjoiVHJ1ZSIsInNybGMiOiJUcnVlIiwibmJmIjoxNzUyNTY5ODc1LCJleHAiOjE3NTI1Nzk4NzV9.RpUUgZVIbhsm4dPNjB0FHT4mZN-r8Cm_aHmxxmIQr2U"
            },
             body: {
                
                "name": portfolioName,
                "portfolioTypeID": "afc5603e-ce23-4143-9c7a-8c09e9cf85c7",
                "organizationID": "90588c9c-3c49-4c34-8e89-196389eb9c2d"
          
             },
        })

        .then((response)=>{
            expect(response.status).to.equal(200)
        })

        //login to the system
        loginPage.login('gayashani.divyanjalee@xyicon.com', 'Gaya@2493802');

        //check the portfolio which is created by API call is available in the Grid
        portfolioPage.searchPortfolio(portfolioName);

        //Select the created portfolio from the Grid
        portfolioPage.selectFirstRowCheckbox();

        //Delete and verify the portfolio is deleted
        portfolioPage.deletePortfolio();

    })
})