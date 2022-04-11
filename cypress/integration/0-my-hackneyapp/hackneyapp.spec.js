describe('My First Test', function () {
  it('Visits the landing page', function () {
    // Correct testing format =>
    // Arrange - setup initial app state
    // Act - take an action
    // Assert - make an assertion

      cy.visit('http://localhost:3000')
  })

  it('Finds the Header of the page', function () {
      cy.visit('http://localhost:3000')
      cy.contains('Book Hackney Facilities and Services')
  })

})