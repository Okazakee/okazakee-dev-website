import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import '../styles//globals.css';
import '/Fonts/Fonts.css';
import Layout from '../components/common/Layout';
import { MainProvider } from '../context/MainContext';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </MainProvider>
  );
}

export default MyApp;
