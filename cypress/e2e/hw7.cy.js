
beforeEach(() => {
  cy.visit('https://automationteststore.com/');
  cy.get('a:contains("Login or register")').click();
});

describe('registration-tests', () => {
  it('registration-tests', () => {
    cy.get('#accountFrm_accountregister').first().check();
    cy.get('button[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type('First_Name_test');
    cy.get('#AccountFrm_lastname').type('Last_Name_test');
    cy.get('#AccountFrm_email').type('mepere5511@ibtrades.com');
    cy.get('#AccountFrm_telephone').type('0981115522');
    cy.get('#AccountFrm_fax').type('380981115522');
    cy.get('#AccountFrm_company').type('Qalight');
    cy.get('#AccountFrm_address_1').type('Khreschatyk St.1');
    cy.get('#AccountFrm_address_2').type('Khreschatyk St.2');
    cy.get('#AccountFrm_city').type('Kyiv');
    cy.get('#AccountFrm_postcode').type('00001');
    cy.get('#AccountFrm_country_id').select('220');
    cy.get('#AccountFrm_zone_id').select('3490');
    cy.get('#AccountFrm_loginname').type('WK_test');
    cy.get('#AccountFrm_password').type('123456');
    cy.get('#AccountFrm_confirm').type('123456');
    cy.get('#AccountFrm_newsletter1').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('button[title="Continue"]').click();
  });
});

describe('authorization-tests', () => {
  it('authorization-tests', () => {
    cy.get('#loginFrm_loginname').type('WK_test');
    cy.get('#loginFrm_password').type('123456');
    cy.get('button[title="Login"]').click();
  });
});