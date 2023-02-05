import "@/../styles/global.css";
import { AppProps } from "next/app";

interface IPageProps {}

const MyApp = ({ Component, pageProps }: AppProps<IPageProps>): JSX.Element => {
  return <Component {...pageProps} />;
};

export default MyApp;
