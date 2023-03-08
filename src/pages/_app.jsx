import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import '../styles/globals.css';
import '/Fonts/Fonts.css';
import Layout from '../components2/common/Layout';
import { MainProvider } from '../components2/context/MainContext';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </MainProvider>
  );
}

export default MyApp;
