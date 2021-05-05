import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { theme } from "../../styles/theme"
import { AuthProvider } from "../contexts/AuthContext"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
