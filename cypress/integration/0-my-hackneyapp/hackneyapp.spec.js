import * as React from 'react'
import { mount } from '@cypress/react'
import BookingButton from '../../../src/components/BookingButton'

it('Shows the Booking Button', () => {
  mount(<BookingButton>Test button</BookingButton>)
  cy.get('button').contains('Create a Booking').click()
})

// describe('Hackney Landing Page', () => {
//   it('loads successfully', () => {
//     // ARRANGE
//       cy.visit('http://localhost:3000')
//     // ACT
//     // None: Loading only
//     // ASSERT

//     // BUTTON
//       mount(<BookingButton>Test button</BookingButton>)
//       cy.get('button').contains('Booking button').click()
//     })
// })