import React from 'react'
import styled from 'styled-components'
import { Portal } from '../Portal'

type Props = {
  title?: string
  // isOpen: boolean
  // onClose: () => void
  // closeOnOverlayClick: boolean
  // children?: React.ReactNode
}

const Container = styled.div`
  background-color: ${props => props.theme.color.secundary.contrastText};
  color: ${props => props.theme.color.secundary.main};
`

export const Dialog = ({ title }: Props) => {
  return (
    <Portal wrapperId='portal-modal-container'>
      <Container role='presentation'>{title}</Container>
    </Portal>
  )
}
