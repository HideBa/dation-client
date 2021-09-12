import ThemeProvider from '@dation/styles/provider';
import '../styles/global.css';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/dist/shared/lib/router/router';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Component {...pageProps} />;
      </ThemeProvider>
    </RecoilRoot>
  );
}
