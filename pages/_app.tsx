import React, { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider, useSnackbar } from "notistack";
import LangState from "src/shared/context/LanguageContext";
import { MyThemeContextProvider } from "src/shared/context/MyThemeContext";
import UserProvider from "src/shared/auth/UserProvider";
import NProgress from "nprogress";
import { Router } from "next/router";
import "nprogress/nprogress.css";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    
      <MyThemeContextProvider>
        <LangState>
          <UserProvider>
            <QueryClientProvider client={queryClient}>
              <SnackbarProvider>
                <Component {...pageProps} />
              </SnackbarProvider>
            </QueryClientProvider>
          </UserProvider>
        </LangState>
      </MyThemeContextProvider>
  );
}

export default MyApp;
