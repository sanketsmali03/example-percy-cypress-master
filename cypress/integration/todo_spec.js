const TEST_WIDTHS = [720, 1280, 1920];
let scrollToBottom = require("scroll-to-bottomjs");

describe('TodoMVC', function() {
  beforeEach(function() {
    // Load our app before starting each test case
    //cy.viewport(1440, 900)
    cy.visit('https://bstackdemo.com/')
    
  })

  it('Loads the TodoMVC app', function() {
    cy.wait(3000);
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.percySnapshot("Landing Page ",{ widths: TEST_WIDTHS,enableJavaScript: true,minHeight: 2000})
    cy.get('#signin').click();
    cy.wait(4000);
    cy.contains('Select Username').type('demouser{enter}');
    cy.contains('Select Password').type('testingisfun99{enter}');
    cy.percySnapshot("Login Page",{ widths: TEST_WIDTHS,enableJavaScript: true,minHeight: 2000})
    cy.get('#login-btn').click();
    cy.wait(3000);
    cy.percySnapshot("HomePage after Login",{ widths: TEST_WIDTHS,enableJavaScript: true,minHeight: 2000})
    cy.get('#2').children('.shelf-item__buy-btn').click();
    cy.percySnapshot("Add to Cart",{ widths: TEST_WIDTHS,enableJavaScript: true,minHeight: 2000})
    cy.get('.buy-btn').click();
    cy.wait(3000);
    cy.percySnapshot("Check out details page",{ widths: TEST_WIDTHS,enableJavaScript: true,minHeight: 2000})
    cy.get('#firstNameInput', { timeout: 30000 }).type('test');
    cy.get('#lastNameInput').type('test');
    cy.get('#addressLine1Input').type('test');
    cy.get('#provinceInput').type('test');
    cy.get('#postCodeInput').type('123');
    cy.wait(1000);
    cy.get('#checkout-shipping-continue', { timeout: 30000 }).click();
    cy.get('.button', { timeout: 30000 }).click(); 
    cy.wait(2000);
    cy.percySnapshot("Order details",{ widths: TEST_WIDTHS,enableJavaScript: true,minHeight: 2000})
    cy.wait(1000);
    cy.contains('Continue Shopping »').click();
    cy.wait(3000);
    cy.percySnapshot("Back to HomePage",{ widths: TEST_WIDTHS,enableJavaScript: true,minHeight: 2000})
    cy.get('#orders', { timeout: 30000 }).click();
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.wait(3000);
    cy.percySnapshot("Orders",{ widths: TEST_WIDTHS,enableJavaScript: true,minHeight: 2000})
    cy.get('#logout').click();

     })


})
