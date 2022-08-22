import "../styles/globals.css";
import Layout from "../components/layout/layout";
import store, { persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
