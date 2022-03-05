
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import { ChakraProvider } from '@chakra-ui/react';

reactDOM.render(
    <React.StrictMode>
    <ChakraProvider>
    <App />
  </ChakraProvider>
  </React.StrictMode>,
document.getElementById("root")
)