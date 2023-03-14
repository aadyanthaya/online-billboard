import { AppProps } from "next/app";
import Script from 'next/script'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://blockonomics.co/js/pay_widget.js"></Script>
    </>
  );
};

export default App;
