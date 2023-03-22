import React from 'react'
import styled from 'styled-components'
import { Portal } from '../Portal'
import { Overlay } from '../Overlay/Overlay'

type Props = {
  title?: string
  isOpen: boolean
  // onClose: () => void
  // closeOnOverlayClick: boolean
  children?: React.ReactNode
}

const DialogContainer = styled.div`
  background-color: ${props => props.theme.color.primary.contrastText};
  color: ${props => props.theme.color.primary.main};
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

const DialogContent = styled.div``

export const Dialog = ({ title, children, isOpen = false }: Props) => {
  return (
    <Portal wrapperId='portal-modal-container'>
      {isOpen && (
        <>
          <Overlay aria-hidden />
          <DialogContainer role='presentation'>
            <DialogBody>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogCloseBtn>
                  <span aria-hidden='true'>&#x2715;</span>
                </DialogCloseBtn>
              </DialogHeader>
              <DialogContent>{children}</DialogContent>
            </DialogBody>
          </DialogContainer>
        </>
      )}
    </Portal>
  )
}
