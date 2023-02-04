import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import '../styles/globals.css';
import '/Fonts/Fonts.css';
import Layout from '../components/Common/Layout';
import { MainProvider } from '../components/context/MainContext';

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainProvider>
  );
}

export default MyApp;
