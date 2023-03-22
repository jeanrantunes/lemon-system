import React from 'react'
import { render, screen } from '../../utils/test-utils'
import { Dialog } from '.'

test('Dialog component', () => {
  render(<Dialog title='test' isOpen={true} onClose={() => {}} />)

  expect(screen.getByRole('presentation')).toHaveTextContent('test')
})
