import React, { useEffect } from 'react';
import Container from './components/Container/Container';
import { BrowserRouter } from 'react-router-dom'

import { test1 } from './tests';



function App() {

  useEffect(() => {
    test1()

  }, [])


  return (
    <BrowserRouter>
    
        <Container />

    </BrowserRouter>
  );
}

export default App;
