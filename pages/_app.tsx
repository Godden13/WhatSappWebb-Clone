import { AppProps } from "next/app";
import "../styles/globals.css";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />{" "}
    </AuthContextProvider>
  );
}

export default MyApp;
