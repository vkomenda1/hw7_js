
beforeEach(() => {
  cy.visit('https://automationteststore.com/');
  cy.get('a:contains("Login or register")').click();
});

describe('registration-tests', () => {
  it('registration-tests', () => {
    cy.get('#accountFrm_accountregister').first().check();
    cy.get('button[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').click().type('First_Name_test');
    cy.get('#AccountFrm_lastname').click().type('Last_Name_test');
    cy.get('#AccountFrm_email').click().type('mepere5511@ibtrades.com');
    cy.get('#AccountFrm_telephone').click().type('0981115522');
    cy.get('#AccountFrm_fax').click().type('380981115522');
    cy.get('#AccountFrm_company').click().type('Qalight');
    cy.get('#AccountFrm_address_1').click().type('Khreschatyk St.1');
    cy.get('#AccountFrm_address_2').click().type('Khreschatyk St.2');
    cy.get('#AccountFrm_city').click().type('Kyiv');
    cy.get('#AccountFrm_postcode').click().type('00001');
    cy.get('#AccountFrm_country_id').select('220');
    cy.get('#AccountFrm_zone_id').select('3490');
    cy.get('#AccountFrm_loginname').click().type('WK_test');
    cy.get('#AccountFrm_password').click().type('123456');
    cy.get('#AccountFrm_confirm').click().type('123456');
    cy.get('#AccountFrm_newsletter1').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('button[title="Continue"]').click();
  });
});

describe('authorization-tests', () => {
  it('authorization-tests', () => {
    cy.get('#loginFrm_loginname').click().type('WK_test');
    cy.get('#loginFrm_password').click().type('123456');
    cy.get('button[title="Login"]').click();
  });
});