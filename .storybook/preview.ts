import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { ThemeProvider } from 'styled-components'
import Theme from '../src/styles/Theme'
import GlobalStyles from '../src/styles/globalStyles'

const customViewports = {
  mobile: {
    name: 'iPhoneSE',
    styles: {
      width: '375px',
      height: '812px'
    }
  }
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: Theme
    },
    GlobalStyles,
    Provider: ThemeProvider
  })
]

export const parameters = {
  layout: 'fullscreen',
  viewport: { viewports: customViewports, defaultViewport: 'iPhoneSE' }
}
