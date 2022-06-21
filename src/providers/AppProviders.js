import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const API_TOKEN_DATO = '1951545a200867e3484c713bc36213';
// const API_TOKEN_FLOTIQ = '1d2cd2b380cd0672011ad319792f5d76';

// const client = new GraphQLClient({
//   url: `https://api.flotiq.com/api/graphql?auth_token=${API_TOKEN_FLOTIQ}`,
// });

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: `Bearer ${API_TOKEN_DATO}`,
  },
});

const AppProviders = ({ children }) => {
  return (
    <ClientContext.Provider value={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ClientContext.Provider>
  );
};

export default AppProviders;
