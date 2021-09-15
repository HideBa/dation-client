import ThemeProvider from '@dation/styles/provider';
import '../styles/global.css';
import { AppProps } from 'next/dist/shared/lib/router/router';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
