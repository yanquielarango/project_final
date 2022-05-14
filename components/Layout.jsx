import Head from 'next/head';
import Footer from './Footer';



import Navbar from './NavBar';


const Layout = ({children}) => {
  return (
    <div className="p-3">
      <Head>
        <title>Ecommerce Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout