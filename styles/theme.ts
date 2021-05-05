import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
  colors: {
    dark: {
      "400": "#373941",
      "600": "#1A202D",
      "800": "#06121D",
      "900": "#05111C"
    },
    light: {
      "1000": "#FFFFFF"
    },
    orange: {
      "800": "#FC8316"
    },
    blue: {
      "300": "#09ACF2",
      "500": "#4262C7",
      "900": "#1A202D"
    },
  },
  fonts: {
    heading: 'Pacifico',
    body: 'Pacifico'
  },
  styles: {
    global: {
      body: {
        bg: 'dark.600',
        color: 'light.1000',
        fontWeight: 500
      },
    }
  },
})