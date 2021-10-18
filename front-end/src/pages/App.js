import React from "react";
import '../components/style/base.css';

export default function MyApp({ Component, pageProps }) {
  return (
    // <UserProvider>
      <Component {...pageProps} />
    // </UserProvider>
  );
}