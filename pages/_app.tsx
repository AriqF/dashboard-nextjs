import '../styles/globals.css'
import '../styles/index.css';
import '../styles/dashboard.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);


  return <Component {...pageProps} />
}

export default MyApp
