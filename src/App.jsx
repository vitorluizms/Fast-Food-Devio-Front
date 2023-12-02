import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Feed from './pages/Feed';
import Theme from './assets/styles/ThemeProviderStyles';
import ResetStyles from './assets/styles/ResetStyle';
import GlobalStyles from './assets/styles/GlobalStyles';
import Kitchen from './pages/Kitchen';
import PaymentPage from './pages/Payment';

function App() {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/kitchen" element={<Kitchen />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
