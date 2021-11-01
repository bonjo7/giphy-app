/* eslint-disable no-undef */
describe("Input", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("copy iframe code", () => {
    cy.get("#embed-button").first().focus().click();
    cy.wait(1000);
    cy.get('button[id="button-addon2"]').click();
  });

  it("copy repsonse iframe code", () => {
    cy.get("#embed-button").first().focus().click();
    cy.wait(1000);
    cy.get('[type="checkbox"]').check();
    cy.wait(1000);
    cy.get('button[id="button-addon2"]').click();
  });

  it("copy share url", () => {
    cy.get("#share-button").first().focus().click();
    cy.wait(1000);
    cy.get('button[id="button-addon2"]').click();
  });
});
