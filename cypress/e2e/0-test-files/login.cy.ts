import {AuthenticationUtils} from "../../utils/authentication/authentication-utils";
import {AuthenticationConstants} from "../../utils/authentication/authentication-constants";

describe('example login test', () => {
  beforeEach(() => {
    AuthenticationUtils.login();
  })

  it('check if login was successful', () => {
    cy.get(AuthenticationConstants.Selectors.Login.BUTTON_LOGOUT).should('exist');
    cy.get(AuthenticationConstants.Selectors.Login.BUTTON_LOGIN).should('not.be.visible');
  })

  it('logout current user', () => {
    cy.get(AuthenticationConstants.Selectors.Login.BUTTON_LOGOUT)
        .click()
        .should('not.exist');
  })
})