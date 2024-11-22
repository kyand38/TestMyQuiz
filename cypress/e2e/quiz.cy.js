// End to End testing replicating user experience 
describe('Quiz component', ()=> {
    beforeEach(() => {
        cy.visit('/')
    }
)

    it("When we click the start button the first question appears", () => {
        cy.contains('Start Quiz').should('be.visible');
        cy.contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
    })

    it("When we reach the end of the quiz we see the Take New Quiz button and score", () => {
      cy.get('button').contains('Start Quiz').click();
        for(let i = 0; i < 10; i++) {
        cy.get('button').should('be.visible');
        cy.get('button').contains('2').click();
    }
        cy.get('button').contains('Take New Quiz', { timeout: 10000 }).should('be.visible');
    })

    it("When the user clicks on the Take New Quiz button the quiz starts over and a new question appears", () => {
      cy.get('button').contains('Start Quiz').click();
        for(let i = 0; i < 10; i++) {
        cy.get('button').should('be.visible');
        cy.get('button').contains('2').click();
    }
        cy.get('button').contains('Take New Quiz', { timeout: 10000 }).click();
        cy.get('.card').should('be.visible');
    })
  


    
});
