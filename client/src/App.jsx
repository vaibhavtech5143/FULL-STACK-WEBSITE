import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {


  return (
    <>
   <ChakraProvider>
   <ColorModeProvider>
    <Router>
      <Navbar/>
      <main>
        {/* <Routes></Routes> */}
      </main>
    </Router>
    </ColorModeProvider>
   </ChakraProvider>
    </>
  )
}

export default App
