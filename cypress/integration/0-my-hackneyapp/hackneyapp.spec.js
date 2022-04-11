describe('My First Test', function () {
  it('Visits the landing page', function () {
    // Arrange - setup initial app state
    // Act - take an action
    // Assert - make an assertion

    cy.visit('http://localhost:3000')
  })

  it('Finds the Header of the page', function () {
    cy.visit('http://localhost:3000')
    cy.contains('Book Hackney Facilities and Services')
  })

  it('Booking button', function () {
    // Arrange - Visits the landing page
    cy.visit('http://localhost:3000')
    // Act - Finds the text create a booking and clicks on it
    cy.contains('Create a Booking').click()
    // Assert - Directed to booking page
    cy.url()
    .should('include', '/booking')
  })

  it('Amend button', function () {
    // Arrange - Visits the landing page
    cy.visit('http://localhost:3000')
    // Act - Finds the text create a booking and clicks on it
    cy.contains('Amend a Booking').click()
    // Assert - Directed to booking page
    cy.url()
    .should('include', '/amend')
  })

  it('Can accept first name of user', function () {
    // Arrange - Visits the landing page
    cy.visit('http://localhost:3000')
    // Act - Finds the text create a booking and clicks on it
    cy.contains('Create a Booking').click()
    // Assert - On booking page, entering values works
    cy.url()
    .should('include', '/booking')

    cy.get('.govuk-input lbh-input')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
  })

})