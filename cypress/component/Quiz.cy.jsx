import React from 'react';
import { mount } from 'cypress/react'; // For mounting the component
import Quiz from '../../client/src/components/Quiz';
// This is a virtual DOM and mock data to test this component in isolation eg. "component testing"
describe('Quiz component', ()=> {
    beforeEach(() => {
        mount(<Quiz/>)
        cy.intercept({
            method: "GET",
            url: "/api/questions/random",
        }, {
            fixture: "questions.json",
            statusCode: 200,
        }).as('getRandomQuestion');
    }
)
    it('renders Start Quiz button when no quiz has been started', () => {
        
        cy.contains('Start Quiz').should('be.visible');
        cy.contains('Start Quiz').click();
        cy.contains('Start Quiz').should('not.exist');
    })
    
    it('Should redirect to Quiz questions card', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
    })

    it('When the questions have been answered I can view my score', () => {
        cy.get('button').contains('Start Quiz').click();
        for(let i = 0; i < 20; i++) {
        cy.get('button').should('be.visible');
        cy.get('button').contains('2').click();
    }
        cy.get('button').contains('Take New Quiz', { timeout: 10000 }).should('be.visible');
    })

    it('When I click on the Take New Quiz button the test starts over', ()=> {
        cy.get('button').contains('Start Quiz').click();
        for(let i = 0; i < 20; i++) {
        cy.get('button').should('be.visible');
        cy.get('button').contains('2').click();
    }
        cy.get('button').contains('Take New Quiz', { timeout: 10000 }).click();
        cy.get('.card').should('be.visible');
    })
    
        
});
