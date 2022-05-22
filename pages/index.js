/* Importing the components from the chakra-ui library. */
import { Stack, Container, Box, Heading, Text, Flex } from '@chakra-ui/react'

/* Importing the components from the components folder. */
import { Product, FooterBanner, HeroBanner} from '../components';

/* Importing the client from the client.js file. */
import { client } from '../lib/client';

const Home = ({ products, bannerData}) => {
  return (
    <Stack  justify="center" align="center" marginLeft={{base:'20px', md:'0'}}> 
    <Container maxW='container.xl'  >        
      <HeroBanner heroBanner={ bannerData.length && bannerData[0] }/>
      {console.log(bannerData)}
        <Box>
          <Heading as='h1'  size='xl' textAlign='center' marginTop='10' color='blue.800' fontWeight='900' >Best   Seller  Products </Heading>
          <Text fontSize='xs' textAlign='center' marginBottom='10' color='gray.500'>speaker  there are many variations passages</Text>
        </Box>

        <Flex flexWrap='wrap' gap='5' justify='center'  align='center'  >              
          {products?.map((product) => <Product key={product._id} product={product}/>)}
        </Flex>

        <FooterBanner footerBanner={bannerData && bannerData[1]}/>
      </Container>
</Stack>
  )
}
/**
 * GetServerSideProps is a function that fetches data from Sanity and returns it as props to the page
 * @returns An object with a props property.
 */

export const getServerSideProps = async () => {
  const query = '*[_type == "product"] ';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type =="banner"] ';
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {
      products,
      bannerData
    }
  }
}

export default Home;