import '@/common/styles/global.css';

import localFont from '@next/font/local';
import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { MouseVariantProvider } from '@/modules/customMouse';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Koakoalla</title>
        <meta name="description" content="Koakoalla" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="__font">
        <MotionConfig
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 0.2 }}
        >
          <MouseVariantProvider>
            <Component {...pageProps} />
          </MouseVariantProvider>
        </MotionConfig>
      </div>
    </>
  );
}
