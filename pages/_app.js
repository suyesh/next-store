import Head from "../components/Head";
import "../assets/init.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}
