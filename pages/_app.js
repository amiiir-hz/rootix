import "src/styles/globals.css";
import store, { persistor } from "src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LanguageProvider } from "@/context/LanguageContext";
import PageContent from "src/share/hooks/PageContent";
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
              <Component {...pageProps} />
            </PageContent>
          </LanguageProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
