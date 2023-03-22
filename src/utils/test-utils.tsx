import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from '../styles/Theme'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export * from '@testing-library/jest-dom'
export { customRender as render }
