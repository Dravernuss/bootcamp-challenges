describe("Login test", () => {
  it("should logged propertly", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="email-input"]').type("test2@test.com");
    cy.get('[data-test-id="passwd-input"]').type("123");
  });
});
