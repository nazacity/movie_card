import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { THEME } from 'theme';
import createEmotionCache from 'createEmotionCache';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';
import store, { persistor } from 'store';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'theme/custom_slide.css';
import 'swiper/css';
import 'swiper/css/navigation';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [sideBarOpen, setSideBar] = useState(false);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <Head>
            <link rel="icon" href="/images/logos/logo.png" />
            <link rel="apple-touch-icon" href="/images/logos/logo.png" />
            <title>Movies</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
            <meta name="description" content="Shopsabuy" />
            <meta property="og:description" content="Shopsabuy" />
            <meta
              property="og:image"
              content="../../public/images/logos/logo.png"
            />
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
          </Head>
          <ThemeProvider theme={THEME}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default MyApp;
