import React from 'react'
import { render, fireEvent, waitFor, act, screen } from '../../utils/test-utils'
import { Dialog } from '.'
import type { DialogProps } from './Dialog'

function setup({
  title,
  isOpen = true,
  onClose = jest.fn,
  closeOnOverlayClick = true,
  children
}: Partial<DialogProps>) {
  return render(
    <Dialog
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={closeOnOverlayClick}
    >
      {children}
    </Dialog>
  )
}

describe('Dialog component', () => {
  describe('renders', () => {
    const title = 'Title'
    const paragraph = 'paragraph test'

    const { getByText } = setup({ title, children: paragraph })

    it('should render title and paragraph', () => {
      expect(getByText('Title')).toBeInTheDocument()
      expect(getByText('paragraph test')).toBeInTheDocument()
    })
  })

  describe('toggle modal', () => {
    it('should open modal when isOpen is true', () => {
      const isOpen = true
      const { queryByRole } = setup({ isOpen })
      expect(queryByRole('dialog')).toBeInTheDocument()
    })

    it('should close modal when isOpen is false', () => {
      const isOpen = false
      const { queryByRole } = setup({ isOpen })
      expect(queryByRole('dialog')).not.toBeInTheDocument()
    })

    describe('when modal is closed by event', () => {
      const onCloseMocked = jest.fn()

      beforeEach(() => {
        const isOpen = true

        setup({ isOpen, onClose: onCloseMocked })
      })

      it('should call onClose callback when modal is closed by button', async () => {
        const button = await waitFor(() => screen.getByText('✕'))
        act(() => {
          fireEvent.click(button)
        })

        expect(onCloseMocked).toHaveBeenCalled()
      })

      it('should call onClose callback when modal is closed by esc key', async () => {
        const dialog = await waitFor(() => screen.getByRole('dialog'))
        act(() => {
          fireEvent.keyUp(dialog, {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            charCode: 27
          })
        })

        expect(onCloseMocked).toHaveBeenCalled()
      })
    })

    describe('closeOnOverlayClick', () => {
      const onCloseMocked = jest.fn()

      it('should close by clicking on overlay when closeOnOverlayClick is true', async () => {
        setup({
          isOpen: true,
          onClose: onCloseMocked,
          closeOnOverlayClick: true
        })

        const overlay = await waitFor(() => screen.getByTestId('overlay'))
        act(() => {
          fireEvent.click(overlay)
        })

        expect(onCloseMocked).toHaveBeenCalled()
      })

      it('should NOT close by clicking on overlay when closeOnOverlayClick is false', async () => {
        setup({
          isOpen: true,
          onClose: onCloseMocked,
          closeOnOverlayClick: false
        })

        const overlay = await waitFor(() => screen.getByTestId('overlay'))
        act(() => {
          fireEvent.click(overlay)
        })

        expect(onCloseMocked).not.toHaveBeenCalled()
      })
    })
  })
})
