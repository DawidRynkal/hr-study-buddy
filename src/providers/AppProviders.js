import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'assets/styles/theme';
import { AuthProvider } from 'hooks/useAuth';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          {children}
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
