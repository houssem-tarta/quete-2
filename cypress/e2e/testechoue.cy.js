describe('inscriptionReussi', () => {
    it('inscrire', () => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register")
        cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
        cy.get('#firstName').type("hamza")
        cy.get('#lastName').type("ali")
        cy.get('#signup-email').type("f429a571ad3d@drmail.in")
        cy.get('#signup-password').type("Azerty1234")
        cy.get('[data-qa="signup-submit-button"]').click()

       
        });
        
    
    });