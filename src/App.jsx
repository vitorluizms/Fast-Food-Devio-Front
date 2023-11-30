import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Feed from './pages/Feed';
import Theme from './assets/styles/ThemeProviderStyles';
import ResetStyles from './assets/styles/ResetStyle';
import GlobalStyles from './assets/styles/GlobalStyles';

function App() {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Feed />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
