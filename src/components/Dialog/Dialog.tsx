import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Portal } from '../Portal'
import { Overlay } from '../Overlay/Overlay'

const ESC_CODE = 'Escape'

export type DialogProps = {
  title?: string
  isOpen: boolean
  onClose: () => void
  closeOnOverlayClick: boolean
  children?: React.ReactNode
}

const DialogContainer = styled.div<Partial<DialogProps>>`
  background-color: ${props => props.theme.color.primary.contrastText};
  color: ${props => props.theme.color.primary.main};
  position: absolute;
  inset: auto 0 0;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.2s ease-in-out;
  transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(100%)')};
`

const DialogBody = styled.div`
  padding: ${props => props.theme.space[1]};
`

const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space[2]};
`

const DialogTitle = styled.h2`
  font-size: ${props => props.theme.font.big};
  font-weight: 300;
  line-height: 30px;
`

const DialogCloseBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
  font-size: 24px;
`

const DialogContent = styled.div`
  max-height: 70vh;
  overflow-x: auto;
`

export const Dialog = ({
  title,
  children,
  isOpen = false,
  closeOnOverlayClick = true,
  onClose
}: DialogProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const handleClose = () => {
    setModalIsOpen(false)
    document.querySelector('html')?.classList.remove('overflow-hidden')
    if (onClose) {
      onClose()
    }
  }

  const handleCloseOnOverlayClick = () => {
    if (!closeOnOverlayClick) {
      return
    }

    handleClose()
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.code === ESC_CODE) {
        handleClose()
      }
    }
    document.addEventListener('keyup', handleEsc)

    return () => {
      document.removeEventListener('keyup', handleEsc)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) {
      handleClose()
      return
    }

    setModalIsOpen(true)
    document.querySelector('html')?.classList.add('overflow-hidden')
  }, [isOpen])

  return (
    <Portal wrapperId='portal-modal-container'>
      <Overlay
        aria-hidden
        onClick={handleCloseOnOverlayClick}
        data-testid='overlay'
        isOpen={modalIsOpen}
      />
      <DialogContainer role='dialog' isOpen={modalIsOpen}>
        <DialogBody>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogCloseBtn onClick={handleClose}>
              <span aria-hidden>&#x2715;</span>
            </DialogCloseBtn>
          </DialogHeader>
          <DialogContent>{children}</DialogContent>
        </DialogBody>
      </DialogContainer>
    </Portal>
  )
}
