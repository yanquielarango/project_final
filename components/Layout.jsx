import Head from 'next/head';

/* Importing the Footer component from the Footer.js file. */
import Footer from './Footer';
import {Box} from '@chakra-ui/react'


import Navbar from './NavBar';


const Layout = ({children}) => {
  return (
    <Box>
      <Head>
        <title>Ecommerce Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer >
        <Footer/>
      </footer>
    </Box>
  )
}

export default Layout