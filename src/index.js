
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

reactDOM.render(
    <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light"/>
    <App />
  </ChakraProvider>
  </React.StrictMode>,
document.getElementById("root")
)