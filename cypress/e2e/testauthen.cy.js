describe('inscriptionReussi', () => {
    it('inscrire', () => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register")
        cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
        cy.get('#signin-email').type("f429a571ad3d@drmail.in")
        cy.get('#signin-password').type("Azerty1234")
        cy.get('[data-qa="signin-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()

       
        });
        
    
    });
