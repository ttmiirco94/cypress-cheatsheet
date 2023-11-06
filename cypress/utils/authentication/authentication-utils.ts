import {AuthenticationConstants} from "./authentication-constants";

export abstract class AuthenticationUtils {
    public static login(user: 'admin' | 'user' = 'user'): void {
        let username;
        let password;

        cy.visit('/');
        cy.fixture(`users/${user}.json`)
            .then((userCredentials) => {
                username = userCredentials.username;
                password = userCredentials.password;
            })
            .then(() => {
                cy.get(AuthenticationConstants.Selectors.Login.USERNAME).type(username);
                cy.get(AuthenticationConstants.Selectors.Login.PASSWORD).type(password);
                cy.get(AuthenticationConstants.Selectors.Login.BUTTON_LOGIN).click();
                cy.wait(1000);
            })

        cy.get(AuthenticationConstants.Selectors.Login.BUTTON_LOGIN).should('not.exist');
    }
}