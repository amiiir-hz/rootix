import "../styles/globals.css";
import Layout from "../components/layout/layout";
import store, { persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LanguageProvider } from "../context/LanguageContext";
import dynamic from "next/dynamic";

// const LanguageProvider = dynamic(
//   () => {
//     return import("../context/LanguageContext");
//   },
//   { ssr: false }
// );
function MyApp({ Component, pageProps }) {
  // if (typeof window === "undefined") {
  //   global.window = {};
  // }

  // if (typeof document === "undefined") {
  //   global.document = {};
  // }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LanguageProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
