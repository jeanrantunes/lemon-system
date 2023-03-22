import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { ThemeProvider } from 'styled-components'
import Theme from '../src/styles/Theme'
import GlobalStyles from '../src/styles/globalStyles'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: Theme
    },
    GlobalStyles,
    Provider: ThemeProvider
  })
]

export const parameters = { layout: 'fullscreen' }
