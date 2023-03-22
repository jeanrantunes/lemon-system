import React from 'react'
import styled from 'styled-components'
import { Portal } from '../Portal'
import { Overlay } from '../Overlay/Overlay'

type Props = {
  title?: string
  // isOpen: boolean
  // onClose: () => void
  // closeOnOverlayClick: boolean
  children?: React.ReactNode
}

const DialogContainer = styled.div`
  background-color: ${props => props.theme.color.primary.contrastText};
  color: ${props => props.theme.color.primary.main};
`

const DialogBody = styled.div`
  padding: 32px;
`

const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const DialogTitle = styled.h2`
  font-size: ${props => props.theme.font.big};
  font-weight: 300;
`

const DialogCloseBtn = styled.button``

const DialogContent = styled.div``

export const Dialog = ({ title, children }: Props) => {
  return (
    <Portal wrapperId='portal-modal-container'>
      <Overlay aria-hidden />
      <DialogContainer role='presentation'>
        <DialogBody>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogCloseBtn />
          </DialogHeader>
          <DialogContent>{children}</DialogContent>
        </DialogBody>
      </DialogContainer>
    </Portal>
  )
}
