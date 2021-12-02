import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/themes';
import { Wrapper } from './Root.styles';

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  </>
);

export default Root;
