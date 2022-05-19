import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from 'react-hot-toast';
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <StateContext>
        <Layout>
          <Toaster/>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </ChakraProvider>
  );
}

export default MyApp;
