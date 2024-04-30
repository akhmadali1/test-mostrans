import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Head from 'next/head';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import client from '@/lib/graphql';
import { ApolloProvider } from '@apollo/client';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ApolloProvider>
      </RecoilRoot>
    </>
  );
}
