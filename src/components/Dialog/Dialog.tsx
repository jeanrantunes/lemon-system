import React from 'react'
import styled from 'styled-components'

type Props = {
  title?: string
}

const Container = styled.div`
  background-color: ${props => props.theme.color.secundary.contrastText};
  color: ${props => props.theme.color.secundary.main};
`

export const Dialog = ({ title }: Props) => {
  return <Container>{title} component</Container>
}
