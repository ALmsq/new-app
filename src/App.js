import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/global';
import { theme } from './components/theme';

function App() {

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
    </>
      </ThemeProvider>
      );
      }
      export default App;
