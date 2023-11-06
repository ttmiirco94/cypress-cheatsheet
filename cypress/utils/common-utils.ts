export abstract class CommonUtils {
    public static selectRandomElement(selector: string): void {
        cy.get(selector, {timeout: 1000})
            .its('length')
            .then(optionsCount => {
                cy.get(selector)
                    .eq(Math.floor(Math.random() * optionsCount))
                    .click();
            })
    }
}