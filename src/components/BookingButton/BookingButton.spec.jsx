import * as React from 'react'
import { mount } from '@cypress/react'
import BookingButton from './BookingButton'

it('Booking Button test', () => {
  mount(<BookingButton>Test button</BookingButton>)
  cy.get('bookingbutton').contains('Create a Booking').click()
})