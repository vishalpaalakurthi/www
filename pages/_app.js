import React from 'react';
import { ThemeWrapper } from "../Theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}
