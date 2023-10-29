import './App.css';

import React from 'react';

import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

import { Unit } from './pages/Unit';

const theme = extendTheme({});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Unit />
    </ChakraProvider>
  );
}

export default App;
