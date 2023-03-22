import styled from 'styled-components'

type Props = {
  isOpen: boolean
}

export const Overlay = styled.div<Props>`
  position: fixed;
  display: flex;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  inset: 0;
`
