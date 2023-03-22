import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from 'styled-components'
import Theme from '../src/styles/Theme'

addDecorator(withThemesProvider([Theme]), ThemeProvider)
