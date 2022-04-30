import "../styles/globals.css";
import App from "next/app";
import Head from "next/head";

// Store Strapi Global object in context

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head></Head>
      <Component {...pageProps} />
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  // Pass the data to our page via props
  return { ...appProps };
};

export default MyApp;
