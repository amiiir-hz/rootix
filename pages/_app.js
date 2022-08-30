import "../styles/globals.css";
import Layout from "../components/layout/layout";
import store, { persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LanguageProvider } from "../context/LanguageContext";
import PageContent from "../hooks/PageContent";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <LanguageProvider>
            <PageContent>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PageContent>
          </LanguageProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
