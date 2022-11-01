const TEST_WIDTHS = [375, 480, 720, 1280, 1440, 1920];
let scrollToBottom = require("scroll-to-bottomjs");

describe('TodoMVC', function() {
  beforeEach(function() {
    // Load our app before starting each test case
    cy.viewport(1440, 900)
    cy.visit('https://auth.t7r.dev/?response_type=code&client_id=marcoapptestdev-7c1837&scope=info%20accounts%20balance%20cards%20transactions%20direct_debits%20standing_orders%20offline_access&redirect_uri=https://console.t7r.dev/redirect-page&providers=uk-ob-all%20uk-oauth-all')
    
  })

  it('Loads the TodoMVC app', function() {
  cy.wait(25000)
  cy.percySnapshot("P1",{widths: TEST_WIDTHS})
  cy.wait(25000)
  cy.contains('Barclays').click();  
  cy.percySnapshot("P2",{widths: TEST_WIDTHS})
  cy.contains('Barclays').click();  
  cy.wait(10000)
  cy.percySnapshot("P3",{widths: TEST_WIDTHS})
  cy.wait(5000)

  })


})
