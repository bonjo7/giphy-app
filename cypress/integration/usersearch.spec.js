/* eslint-disable no-undef */
describe('Input', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('it focuses the input', () => {
      cy.focused().should('have.class', 'form-control')
    })

    it('accepts input', () => {
        const input = "Football gif"
        cy.get('.form-control')
          .type(input)
          .should('have.value', input)
      })

      it('performs search on pressing enter key', () => {
        const input = "Football gif"
        cy.get('.form-control')
          .type(input)
          .type('{enter}')
      })

      it('performs search on pressing search button', () => {
        const input = "Football gif"
        cy.get('.form-control')
          .type(input)
        cy.get('button[id="searchButton"]').click()
      })

      it('clear user search', () => {
        const input = "Football gif"
        cy.get('.form-control')
          .type(input)
        cy.get('button[id="searchButton"]').click()
        cy.get('button[id="clearSearch"]').click()
      })
  })