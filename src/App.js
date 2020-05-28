import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components'
import { useOnClickOutside } from './hooks'

function App() {
const [open, setOpen] = useState(false)
const node = useRef()

useOnClickOutside(node, () => setOpen(false))
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          <img src="https://image.flaticon.com/icons/svg/2965/2965210.svg" alt="burger icon" />
          <div>
          </div>
          <small>Icon made by Freepik from www.flaticon.com</small>
        </div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen}/>
        </div>
      </>
    </ThemeProvider>
      );
      }
      export default App;
