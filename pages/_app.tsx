import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react';
import NextNProgress from 'nextjs-progressbar';

import { darkTheme } from '../themes';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={ darkTheme }>
      <NextNProgress
        color="linear-gradient(112deg, #06b7db -63.59%, #ff4ecd -20.3%, #0072f5 70.46%)"
        height={3}
      />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
