import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    background-color: #f5f5f5;
  }
`;

const App: React.FC = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Mario Universalis</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
