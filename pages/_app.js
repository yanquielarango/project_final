import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from 'react-hot-toast';
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <StateContext>
          <Layout>
            <Toaster/>
            <Component {...pageProps} />
          </Layout>
        </StateContext>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
